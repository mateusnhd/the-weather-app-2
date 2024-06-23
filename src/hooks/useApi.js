import { api } from "./../axios/index";

export const useApi = () => {
  const language = process.env.REACT_APP_LANGUAGE || "pt";
  
  const getWeather = async (location) => {
      try {
        const weather = await api.get(`data/2.5/weather?q=${location}&appid=85ac1aee05255a869cffb94234769299&units=metric&lang=${language}`);
        return weather.data;
      } catch (error) {
        return null;
      }
  }

  return {
    getWeather
  };
}