import { WeatherData } from './Weather'
import { ForecastData } from './Forecast'

export default interface WeatherResponse {
    provider: string;
    current: WeatherData
    forecast: ForecastData[]
    info: any
    responseTime: number
}