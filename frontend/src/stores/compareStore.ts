import { create } from 'zustand'
import WeatherData from '@/types/WeatherData'

interface CompareStore {
    results: WeatherData[]
    setResults: (data: WeatherData[]) => void
}

export const useCompareStore = create<CompareStore>((set: any) => ({
    results: [],
    setResults: (data: any) => set({ results: data }),
}))