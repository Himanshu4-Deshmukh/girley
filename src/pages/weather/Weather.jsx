import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';

const WeatherForecast = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);

  const handleFetchForecast = async () => {
    try {
      const apiKey = '0d37d999b4705308cc960c47e35d754d';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city.');
      }

      const data = await response.json();

      const weatherForecast = {
        city: data.name,
        temperature: `${(data.main.temp - 273.15).toFixed(2)}°C`, // Convert Kelvin to Celsius
        description: data.weather[0].description,
      };

      setForecast(weatherForecast);
    } catch (error) {
      console.error(error.message);
      setForecast(null);
    }
  };

  return (
    <Layout>
    <div className="container mt-16 mx-auto max-w-md bg-white mb-8 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Weather Forecast</h1>

      <form className="mb-4">
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-600">
            Enter City:
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full py-2 px-3 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        <button
          type="button"
          onClick={handleFetchForecast}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Get Forecast
        </button>
      </form>

      {forecast && (
        <div className="text-lg">
          <p>
            City: <span className="font-semibold">{forecast.city}</span>
          </p>
          <p>
            Temperature: <span className="font-semibold">{forecast.temperature}</span>
          </p>
          <p>
            Description: <span className="font-semibold">{forecast.description}</span>
          </p>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default WeatherForecast;
