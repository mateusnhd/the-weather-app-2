import { useState } from "react";
import { useSearch } from "./useSearch";

export const useWeather = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const { searchLocation } = useSearch(setData);

  return {
    data,
    searchLocation,
    search,
    setSearch
  };
}