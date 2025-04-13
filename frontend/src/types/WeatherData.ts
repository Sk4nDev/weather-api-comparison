export default interface WeatherData {
    provider: string
    current: {
        temperature: number
        humidity: number
        windSpeed: number
        description: string
    },
    responseTime: number
}