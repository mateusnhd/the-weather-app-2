import { useApi } from './useApi';

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const useSearch = (setWeather, setForecast) => {
  const { getWeather } = useApi();

  const findLocationByValue = async (value) => {
    getWeather(value).then((res) => {
      setWeather(res);
    });
  };

  const debouncedSearchLocation = debounce(findLocationByValue, 500);

  const searchLocation = (value) => {
    debouncedSearchLocation(value);
  };

  return {
    searchLocation,
  };
};