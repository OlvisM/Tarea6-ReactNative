import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const API_KEY = '3954c31d191a3665056f9f1b5a96f672'; // Reemplaza con tu clave de API
const CITY = 'Dominican republic,Do'; // Ciudad y país (separados por coma)

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (error: any) {
      console.error('Error fetching weather data:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching weather data: {error}</Text>
      </View>
    );
  }

  if (!weatherData || !weatherData.main || !weatherData.weather || !weatherData.weather[0]) {
    return (
      <View style={styles.container}>
        <Text>No weather data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather in {CITY}</Text>
      <Text style={styles.temp}>{weatherData.main.temp}°C</Text>
      <Text style={styles.description}>{weatherData.weather[0].description}</Text>
      <Text>Humidity: {weatherData.main.humidity}%</Text>
      <Text>Wind Speed: {weatherData.wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default WeatherComponent;
