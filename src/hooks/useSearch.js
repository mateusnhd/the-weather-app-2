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

export const useSearch = (setData) => {
  const { getWeather } = useApi();

  const findLocationByValue = (value) => {
    getWeather(value).then((res) => {
      setData(res);
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