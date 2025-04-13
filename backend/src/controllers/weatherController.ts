import { Request, Response } from 'express'
import { getWeatherData, testAPIs } from '@/services/WeatherService'

export const getWeather = async (req: Request, res: Response) => {
  try {
    const source = req.query.source || 'openweathermap'
    const city = req.query.city || 'London'
    const weatherData = await getWeatherData(city as string, source as string)
    res.status(200).json(weatherData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: `Error fetching weather data` })
  }
}

export const compareAPIs = async (req: Request, res: Response) => {
  try {
    const city = req.query.city || 'London'
    const weatherData = await testAPIs(city as string)
    res.status(200).json(weatherData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error fetching weather data' })
  }
}
