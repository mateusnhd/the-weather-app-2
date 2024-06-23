import { useApi } from "./useApi";

export const useForecast = (weather, setForecast) => {
  const { getForecast } = useApi();

  const getForecastDays = async () => {
    getForecast(weather?.coord?.lat, weather?.coord?.lon).then((forecast) => {
      setForecast(forecast);
    })
  }

  return {
    getForecastDays
  }
}