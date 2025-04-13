'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@/lib/fontawesome'
import axios from 'axios'
import { useCompareStore } from '@/stores/compareStore'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const CompareForm = ({ buttonText }: { buttonText: string }) => {
    const { setResults } = useCompareStore()
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!input) return

        try {
            setIsLoading(true)

            const res = await axios.get(`${API_BASE_URL}/compare?location=${input}`)
            setResults(res.data)
        } catch (err) {
            console.error('Error fetching data:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className="max-w-lg mx-auto flex gap-3" onSubmit={handleSubmit}>   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{buttonText}</label>
            <div className="relative w-300">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FontAwesomeIcon icon={['fa', 'search']} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                    type="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search Location"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-[#5626f3] dark:bg-gray-700"
                    required
                />
                <button
                    type="submit"
                    disabled={!input || isLoading}
                    className={`text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer ${
                        isLoading ? 'bg-[#999]' : 'bg-[#5626f3]'
                    }`}
                >
                    {isLoading ? (
                        <FontAwesomeIcon  icon={['fa', 'spinner']} spin className="w-4 h-4" />
                    ) : (
                        buttonText
                    )}
                </button>
            </div>
        </form>
    )
}

export default CompareForm