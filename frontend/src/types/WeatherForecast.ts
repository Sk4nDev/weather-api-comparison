export default interface WeatherForecast {
    provider: string
    current: {
        temperature: number
        humidity: number
        windSpeed: number
        description: string
    }
    forecast: {
        date: string
        temperature: number
        humidity: number
        windSpeed: number
        description: string
    }[]
    responseTime: number
}