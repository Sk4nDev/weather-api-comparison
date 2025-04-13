'use client'

import { useWeatherStore } from '@/stores/weatherStore'
import moment from 'moment'

const WeatherOverview = () => {
    const { data } = useWeatherStore()

    if (!data || !data.current) {
        return (
            <div className="text-black text-center px-8 py-10 mb-10 w-[400px] mx-auto text-xl2">
                <p className="text-gray-700">No data found</p>
            </div>
        )
    }

    return (
        <div className="mb-30 flex flex-row items-start gap-15">
            <div className="bg-white rounded-md text-black border-2 border-gray-200 text-center px-8 py-10 mb-10 w-[400]">
                <div className="text-md font-bold flex flex-col text-gray-900 gap-3">
                    <span className="uppercase">Today - {data.provider}</span>
                    <span className="font-normal text-gray-700 text-sm">{moment().format('dddd, MMM D • HH:mm')}</span>
                </div>
                <span className="text-gray-700 capitalize font-semibold text-md mb-2">
                    {data.current.description || 'No description available'}
                </span>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                    {data.current.temperature}º
                </div>
                <div className="text-sm font-medium text-gray-800">
                    <strong>Humidity:</strong> {data.current.humidity}%
                </div>
                <div className="text-sm font-medium text-gray-800">
                    <strong>Wind Speed:</strong> {Number(data.current.windSpeed).toFixed(2)} km/h
                </div>
            </div>
            {data.forecast?.length > 0 && (
                <div className="grid gap-4 w-[400]">
                {data.forecast.map((item: any, idx: any) => (
                    <div key={idx} className="bg-white rounded-md border border-gray-200 p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm text-gray-500 font-medium">
                                {moment(item.date).format('dddd, MMM D • HH:mm')}
                            </span>
                            <span className="capitalize text-sm text-gray-700 font-semibold">
                                {item.description}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 justify-between text-sm text-gray-800">
                            <span><strong>Temp:</strong> {item.temperature}º</span>
                            <span><strong>Humidity:</strong> {item.humidity}%</span>
                            <span><strong>Wind:</strong> {Number(item.windSpeed).toFixed(2)} km/h</span>
                        </div>
                    </div>
                ))}
                </div>
            )}
        </div>
    )
}

export default WeatherOverview