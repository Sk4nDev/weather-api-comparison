import { create } from 'zustand'
import WeatherForecast from '@/types/WeatherForecast'

interface WeatherStore {
  city: string
  provider: string
  data: WeatherForecast | null
  setCity: (city: string) => void
  setProvider: (provider: string) => void
  setData: (data: WeatherForecast) => void
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  city: '',
  provider: 'openweathermap',
  data: null,
  setCity: (city: any) => set({ city }),
  setProvider: (provider: any) => set({ provider }),
  setData: (data: any) => set({ data }),
}))