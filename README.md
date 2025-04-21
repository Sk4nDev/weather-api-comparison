
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
  GET /api/weather?location=London&source=weatherapi
  ```

### 2. Compare Weather APIs
- **URL**: `/api/weather/compare`
- **Method**: `GET`
- **Query Parameters**:
  - `location`: The target location ( city name, country etc ) (e.g., `location=London`).
- **Example Request**:
  ```
  GET /api/weather/compare?location=London
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

## 🌤️ Weather API Evaluation

Below is a comparison of the three weather APIs evaluated for the **"Explore"** feature, focusing on response time, data accuracy, reliability, features, and developer experience.

----------

### ✅ **WeatherAPI** ([weatherapi.com](https://www.weatherapi.com/))

**Pros:**

-   **Fast and stable response times** — generally faster or on par with OpenWeatherMap.
    
-   **High accuracy** — consistently aligned with reliable sources like Google Weather.
    
-   **Best free tier** — includes **3 days of hour-by-hour forecasts**, which is best-in-class.
    
-   **Detailed endpoints** — provides rich data such as UV index, air quality, astronomical info.
    
-   **Clear and developer-friendly documentation.**
    

**Cons:**

-   Slightly smaller community and ecosystem compared to OpenWeatherMap.    

----------

### 🌍 **OpenWeatherMap** ([openweathermap.org](https://openweathermap.org/api))

**Pros:**

-   **Fastest average response time** : faster response time comparing to Tomorrow.io
    
-   **Reliable performance** across multiple calls.
    
-   **Large ecosystem** and broad developer community.
    
-   Offers a wide range of services beyond weather (e.g., pollution, solar radiation).
    

**Cons:**

-   Data accuracy can be slightly off compared to WeatherAPI, especially for short-term forecasts.
    
-   Forecast data granularity is limited in the free tier (3-hour intervals vs hourly).
    
-   Slightly more complex response structures and less intuitive field names.
    

----------

### 🌦️ **Tomorrow.io** ([tomorrow.io](https://www.tomorrow.io/weather-api/))

**Pros:**

-   Innovative with highly customizable parameters and insights (e.g., pollen, road risk, etc.).
    
-   Great for predictive use cases and unique metrics.
    
-   Modern developer dashboard and UI.
    

**Cons:**

-   **Unstable free tier** — frequent timeout errors after 4–5 requests.
    
-   **Slowest response time** of the three.
    
-   Requires more effort to parse responses and configure forecast timelines.    

----------

## 🔍 **Recommendation**

After evaluating response speed, stability, forecast granularity, and data accuracy:

> **I recommend [WeatherAPI.com](https://www.weatherapi.com/) as the best choice** for the 'Explore' feature.  
> It offers the best balance of **speed**, **accuracy**, and **features** on the **free tier**, with robust documentation and rich forecast data, making it ideal for both short- and long-term product scalability.
