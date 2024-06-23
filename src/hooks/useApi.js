import { api } from "./../axios/index";

export const useApi = () => {
  const language = process.env.REACT_APP_LANGUAGE || "pt";
  const apiKey = process.env.REACT_APP_API_KEY || "";
  
  const getWeather = async (location) => {
    try {
      const weather = await api.get(`data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=${language}`);
      return weather.data;
    } catch (error) {
      return null;
    }
  }

  const getForecast = async (lat, lon) => {
    try {
      const forecast = await api.get(`data/2.5/forecast?cnt=5&lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${language}`);
      return forecast.data;
    } catch (error) {
      return null;
    }
  }

  return {
    getWeather,
    getForecast
  };
}