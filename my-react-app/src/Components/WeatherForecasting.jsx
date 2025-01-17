import React, { useState, useEffect } from 'react';

const WeatherForecasting = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Function to get user's location
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          setError('Unable to fetch location. Please allow location access.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  // Function to fetch weather data from API
  const fetchWeatherData = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your weather API key
    if (location.lat && location.lon) {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}`;
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError('Error fetching weather data.');
      }
    }
  };

  // UseEffect to fetch location and then weather data
  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeatherData();
    }
  }, [location]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="weather-container">
      <h2>Weather in {weatherData.name}</h2>
      <div className="weather-info">
        <p>Temperature: {weatherData.main.temp} °C</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} KMPH</p>
        <p>{weatherData.weather[0].description}</p>
      </div>
      <div className="weather-forecast">
        {/* You can add a forecast feature using another API endpoint */}
      </div>
    </div>
  );
};

export default WeatherForecasting;
