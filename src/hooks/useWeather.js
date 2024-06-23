import { useState } from "react";
import { useSearch } from "./useSearch";

export const useWeather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const { searchLocation } = useSearch(setWeather, setForecast);

  return {
    forecast,
    setForecast,
    weather,
    searchLocation,
    search,
    setSearch
  };
}