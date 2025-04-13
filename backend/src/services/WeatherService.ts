import axios from 'axios'
import config from '@/config'

import { WeatherData, ForecastData, WeatherResponse } from '@/types'
import { weatherCodeMapping, apiInfo } from '@/constants'

const getEndPoint = (location: string, source = 'weatherapi', dataType: string) => {
    let url: string;

    switch (source) {
        case "openweathermap":
            url = `${config.OPENWEATHER.url}/${dataType}?q=${location}&appid=${config.OPENWEATHER.key}`;
            break;
        case "weatherapi":
            url = `${config.WEATHER_API.url}/${dataType}.json?key=${config.WEATHER_API.key}&q=${location}`;
            break;
        case "tomorrow":
            url = `${config.TOMORROW.url}/${dataType}?location=${location}&apikey=${config.TOMORROW.key}`;
            break;
        default:
            throw new Error("Invalid source");
    }

    return url;
}

// Fetch data from OpenWeatherMap
const getOpenWeatherData = async (location: string): Promise < WeatherResponse > => {
    try {
        const start = Date.now();
        const weatherApi = getEndPoint(location, 'openweathermap', 'weather')
        const {
            data
        } = await axios.get(`${weatherApi}`, {
            params: {
                units: 'metric',
            },
        })

        const currentWeather: WeatherData = {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed * 3.6, // Convert m/s to km/h
            description: data.weather[0].description,
        }

        const forecastApi = getEndPoint(location, 'openweathermap', 'forecast')
        const forecastResponse = await axios.get(`${forecastApi}`, {
            params: {
                units: 'metric',
            },
        })

        const responseTime = Date.now() - start;

        const forecastData: ForecastData[] = forecastResponse.data.list.map((item: any) => ({
            date: item.dt_txt,
            temperature: item.main.temp,
            humidity: item.main.humidity,
            windSpeed: item.wind.speed * 3.6, // Convert m/s to km/h
            description: item.weather[0].description,
        }))

        return {
            provider: 'OpenWeatherMap',
            current: currentWeather,
            forecast: forecastData.slice(0, 5) || [],
            info: apiInfo.openweathermap || null,
            responseTime,
        }
    } catch (error) {
        throw new Error('Error fetching OpenWeather data')
    }
}

// Fetch data from Tomorrow.io
const getTomorrowWeatherData = async (location: string): Promise < WeatherResponse > => {
    try {
        const start = Date.now();
        const weatherApi = getEndPoint(location, 'tomorrow', 'realtime');

        const {
            data
        } = await axios.get(weatherApi);

        const currentWeather: WeatherData = {
            temperature: data.data.values.temperature,
            humidity: data.data.values.humidity,
            windSpeed: data.data.values.windSpeed,
            description: weatherCodeMapping[data.data.values.weatherCode] || 'Unknown',
        };

        const forecastApiUrl = getEndPoint(location, 'tomorrow', 'forecast');
        const forecastResponse = await axios.get(forecastApiUrl, {
            params: {
                units: 'metric',
                timesteps: '1d',
            },
        });

        const dailyForecasts = forecastResponse.data.timelines.daily;
        if (!dailyForecasts || !dailyForecasts.length) {
            throw new Error('No daily forecast found in Tomorrow.io response');
        }

        const forecastData: ForecastData[] = forecastResponse.data.timelines.daily.map((timeline: any) => ({
            date: timeline.time,
            temperature: timeline.values.temperatureAvg,
            humidity: timeline.values.humidityAvg,
            windSpeed: timeline.values.windSpeedAvg,
            description: weatherCodeMapping[timeline.values.weatherCodeMax] || 'Unknown',
        }));

        return {
            provider: 'Tomorrow.io',
            current: currentWeather,
            forecast: forecastData || [],
            info: apiInfo.tomorrow || null,
            responseTime: Date.now() - start
        };

    } catch (error) {
        throw new Error('Error fetching Tomorrow.io data');
    }
};

// Fetch data from WeatherAPI
const getWeatherAPIData = async (location: string): Promise < WeatherResponse > => {
    try {
        const apiUrl = getEndPoint(location, 'weatherapi', 'forecast')
        const start = Date.now();

        const {
            data
        } = await axios.get(`${apiUrl}`, {
            params: {
                units: 'metric',
                days: 5
            },
        })

        const currentWeather: WeatherData = {
            temperature: data.current.temp_c,
            humidity: data.current.humidity,
            windSpeed: data.current.wind_kph,
            description: data.current.condition.text,
        }


        const forecastData: ForecastData[] = data.forecast.forecastday.map((item: any) => ({
            date: item.date,
            temperature: item.day.avgtemp_c,
            humidity: item.day.avghumidity,
            windSpeed: data.current.wind_kph,
            description: item.day.condition.text
        }))

        return {
            provider: 'WeatherAPI',
            current: currentWeather,
            forecast: forecastData || [],
            info: apiInfo.weatherapi || null,
            responseTime: Date.now() - start
        }
    } catch (error) {
        throw new Error('Error fetching WeatherAPI data')
    }
}

export const getWeatherData = async (city: string, source: string): Promise < WeatherResponse > => {
    try {
        switch (source) {
            case 'openweathermap':
                return await getOpenWeatherData(city)
            case 'weatherapi':
                return await getWeatherAPIData(city)
            case 'tomorrow':
                return await getTomorrowWeatherData(city)
            default:
                throw new Error('Invalid source specified')
        }
    } catch (error: any) {
        throw new Error(`Error fetching data from ${source}: ${error.message}`)
    }
}

export const testAPIs = async (city: string): Promise <WeatherResponse[]> => {
    try {
        const results = await Promise.all([
            getOpenWeatherData(city),
            getWeatherAPIData(city),
            getTomorrowWeatherData(city)
        ]);

        return results;
    } catch (error: any) {
        throw new Error(`Error fetching data ${error.message}`)
    }
}