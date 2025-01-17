import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherForecasting() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To track errors

  // Your OpenWeatherMap API key
  const apiKey = 'your-openweathermap-api-key';

  // Function to get weather data
  const fetchWeatherData = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
        setError("Unable to fetch weather data.");
        setLoading(false);
      });
  };

  // Get the user's location
  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error("Geolocation error:", error);
        if (error.code === error.PERMISSION_DENIED) {
          setError("Permission denied. Please enable location access.");
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setError("Position unavailable. Unable to retrieve location.");
        } else if (error.code === error.TIMEOUT) {
          setError("Request timed out. Please try again.");
        } else {
          setError("An unknown error occurred.");
        }
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="sidebar p-4 space-y-6">
      <div className="weather-widget bg-gray-100 p-4 rounded-lg shadow-lg">
        {loading && !error ? (
          <p>Loading weather...</p>
        ) : error ? (
          <p>{error}</p>
        ) : weather ? (
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-semibold">{weather.name}</h3>
              <p>{weather.weather[0].description}</p>
            </div>
            <div className="text-4xl">{Math.round(weather.main.temp)}°C</div>
          </div>
        ) : (
          <p>Unable to fetch weather data.</p>
        )}
        <p className="text-gray-600">
          {weather ? `${new Date(weather.dt * 1000).toLocaleTimeString()} EST` : ''}
        </p>
      </div>
    </div>
  );
}

export default WeatherForecasting;
