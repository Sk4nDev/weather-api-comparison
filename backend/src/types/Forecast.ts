import { WeatherData } from './Weather';

export interface ForecastData extends WeatherData {
    date: string
    temperature: number
    humidity: number
    windSpeed: number
    description: string
}