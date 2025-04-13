'use client'

import { useCompareStore } from '@/stores/compareStore'
import moment from 'moment'
import { useMemo } from 'react'
import { apiConfig } from '@/lib/apiConfig'

const CompareCard = () => {
    const { results } = useCompareStore()
    console.log('results', results)

    const fastestAPI = useMemo(() => {
        if (!results || results.length === 0) return null;
        return results.reduce((fastest: any, current: any) => {
            return current.responseTime < fastest.responseTime ? current : fastest;
        }, results[0]);
    }, [results]);

    if (!results || results.length === 0) {
        return (
            <div className="text-black text-center px-8 py-10 mb-10 w-[400px] mx-auto text-xl2">
                <p className="text-gray-700">Data not found</p>
            </div>
        )
    }

    return (
        <div className="flex gap-6">
            {results.map((item: any, idx: number) => {
                const providerKey = item.provider.toLowerCase();
                const config = {
                    updateFrequency: 'Unknown',
                    cost: 'Unknown',
                    features: ['Unknown'],
                };
                return (
                    <div
                        key={idx}
                        className={`bg-white rounded-md text-black border-2 border-gray-200 text-center px-8 py-10 w-[400px] mx-auto ${fastestAPI?.provider === item.provider ? 'border-green-500' : ''}`}
                    >
                        <div className="text-md font-bold flex flex-col text-gray-900 gap-3">
                            <span className="uppercase">Today - {item.provider}</span>
                            <span className="font-normal text-gray-700 text-sm">
                                {moment().format('dddd, MMM D • HH:mm')}
                            </span>
                        </div>
                        <span className="text-gray-700 capitalize font-semibold text-md mb-2">
                            {item.current.description || 'No description available'}
                        </span>
                        <div className="text-xl font-bold text-gray-900 mb-6">
                            <strong>Temperature:</strong> {item.current.temperature}º
                        </div>
                        <div className="text-sm font-medium text-gray-800">
                            <strong>Humidity:</strong> {item.current.humidity}%
                        </div>
                        <div className="text-sm font-medium text-gray-800">
                            <strong>Wind Speed:</strong> {Number(item.current.windSpeed).toFixed(2)} km/h
                        </div>
                        <div className="mt-4">
                            <span className="text-md text-semibold mt-4">Response Time: {(item.responseTime / 1000).toFixed(2)}s</span>
                            <div className="text-green-500 font-bold">
                                {fastestAPI?.provider === item.provider && (
                                    <span>Fastest API</span>
                                )}
                            </div>
                            <div className="text-sm font-medium text-gray-800">
                                <strong>Update Frequency:</strong> {item.info.updateFrequency}
                            </div>
                            <div className="text-sm font-medium text-gray-800">
                                <strong>Cost Analysis:</strong> {item.info.cost}
                            </div>
                            <div className="text-sm font-medium text-gray-800">
                                <strong>Features:</strong> {item.info.features.join(', ')}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default CompareCard