// Map weather codes to description (you can expand this mapping as needed)
export const weatherCodeMapping: {
    [key: number]: string
} = {
    1000: 'Clear',
    1100: 'Mostly Clear',
    1101: 'Partly Cloudy',
    1102: 'Mostly Cloudy',
    1001: 'Cloudy',
    2000: 'Fog',
    2100: 'Light Fog',
    4000: 'Drizzle',
    4001: 'Rain',
    4200: 'Light Rain',
    4201: 'Heavy Rain',
    5000: 'Snow',
    5001: 'Flurries',
    5100: 'Light Snow',
    5101: 'Heavy Snow',
    6000: 'Freezing Drizzle',
    6001: 'Freezing Rain',
    6200: 'Light Freezing Rain',
    6201: 'Heavy Freezing Rain',
    7000: 'Ice Pellets',
    7101: 'Heavy Ice Pellets',
    7102: 'Light Ice Pellets',
    8000: 'Thunderstorm'
};

export const apiInfo = {
    tomorrow: {
        updateFrequency: 'Every 1 minute',
        cost: 'Free tier available',
        features: ['Real-time weather', 'Forecast', 'Historical data'],
    },
    weatherapi: {
        updateFrequency: 'Every 10 minutes',
        cost: 'Free tier available, paid plans start at $7/month',
        features: ['Current weather', 'Forecast', 'Astronomy data'],
    },
    openweathermap: {
        updateFrequency: 'Every 10 minutes',
        cost: 'Free tier available, paid plans start at $39.25/month',
        features: ['Current weather', 'Forecast', 'Air pollution data', 'Geocoding API'],
    },
};