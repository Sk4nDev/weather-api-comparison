# Weather API Comparison

This is a project built using **Node.js** for the backend and **Next.js** for the frontend. The application compares different weather APIs to recommend one for inclusion in a feature called "Explore." This feature provides users with real-time practical information for every country to help them make smarter travel choices.

## APIs Used

- **Tomorrow.io**: [Weather API](https://www.tomorrow.io/weather-api/)
- **WeatherAPI**: [Weather API](https://www.weatherapi.com/)
- **OpenWeatherMap**: [Weather API](https://openweathermap.org/api)

## Features

- **API Comparison Interface**: The first interface allows users to compare the three weather APIs used in the project. It displays response times, update frequency, cost analysis, and feature comparisons.
  
- **Weather Data Display Interface**: The second interface displays the current weather and the following days' weather data based on selected filters. Users can view detailed weather information, including temperature, humidity, and wind speed.

## Setup

### Backend Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:Sk4nDev/weather-api-comparison.git
   cd weather-app/backend
   ```

2. Create a `.env` file in the `backend` directory with the following configuration:
   ```env
    BASE_URL_OPENWEATHER = 'https://api.openweathermap.org/data/2.5'
    BASE_URL_TOMORROW = 'https://api.tomorrow.io/v4/weather'
    BASE_URL_WEATHERAPI = 'https://api.weatherapi.com/v1'

    OPENWEATHERMAP_API_KEY=d4134e7c72aedbe83c368aae2eec5fd2
    WEATHERAPI_KEY=f2c9c595d4394049952230627250804
    TOMORROW_API_KEY=rA14Et6MN4R302LGp1aJYAeqefX5duGR

    PORT=3001

    FRONT_APP_BASE_URL = 'http://localhost:3000'
   ```

3. Install backend dependencies:
   ```bash
   npm install
   ```

4. Run the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../weather-app
   ```

2. Create a `.env` file in the `weather-app` directory with the following configuration:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/weather
   ```

3. Install frontend dependencies:
   ```bash
   npm install
   ```

4. Run the frontend application:
   ```bash
   npm run dev
   ```

## Backend API Endpoints

### 1. Get Current Weather
- **URL**: `/api/weather`
- **Method**: `GET`
- **Query Parameters**:
  - `location`: The target location ( city name, country etc ) (e.g., `location=London`).
  - `source`: The weather API source (optional, defaults to `openweathermap`).
- **Example Request**:
  ```
  GET /api/weather?city=London&source=weatherapi
  ```

### 2. Compare Weather APIs
- **URL**: `/api/weather/compare`
- **Method**: `GET`
- **Query Parameters**:
  - `location`: The target location ( city name, country etc ) (e.g., `location=London`).
- **Example Request**:
  ```
  GET /api/weather/compare?city=London
  ```

### Example Responses

1. **Response for `/api/weather`**:
   ```json
   {
       "provider": "WeatherAPI",
       "current": {
           "temperature": 10.3,
           "humidity": 71,
           "windSpeed": 5.4,
           "description": "Clear"
       },
       "forecast": [
           {
               "date": "2023-04-12",
               "temperature": 12.0,
               "humidity": 65,
               "windSpeed": 4.0,
               "description": "Partly cloudy"
           }
       ],
       "responseTime": 0.14
   }
   ```

2. **Response for `/api/weather/compare`**:
   ```json
   [
       {
           "provider": "OpenWeather",
           "current": {
               "temperature": 11.06,
               "humidity": 70,
               "windSpeed": 5.54,
               "description": "Few clouds"
           },
           "responseTime": 0.22
       },
       {
           "provider": "WeatherAPI",
           "current": {
               "temperature": 10.3,
               "humidity": 71,
               "windSpeed": 5.40,
               "description": "Clear"
           },
           "responseTime": 0.14
       },
       {
           "provider": "Tomorrow.io",
           "current": {
               "temperature": 12.8,
               "humidity": 64,
               "windSpeed": 1.50,
               "description": "Clear"
           },
           "responseTime": 0.56
       }
   ]
   ```

## Usage

- Access the frontend application at `http://localhost:3000`.
- Use the API Comparison Interface to compare weather data from different APIs.
- Use the Weather Data Display Interface to view current weather and forecasts based on selected filters.
