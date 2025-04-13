// base URLs and API keys
const WEATHER_APIS = {
    OPENWEATHER: {
        url: process.env.BASE_URL_OPENWEATHER,
        key: process.env.OPENWEATHERMAP_API_KEY
    },
    TOMORROW: {
        url: process.env.BASE_URL_TOMORROW,
        key: process.env.TOMORROW_API_KEY
    },
    WEATHER_API: {
        url: process.env.BASE_URL_WEATHERAPI,
        key: process.env.WEATHERAPI_KEY
    },
};

export default WEATHER_APIS;