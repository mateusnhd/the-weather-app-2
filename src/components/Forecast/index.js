import { useForecast } from "hooks/useForecast";
import { Container } from "./styles";
import { useEffect } from "react";
import { ForecastDay } from "./../ForecastDay";

export const Forecast = ({ weather, setForecast, forecast }) => {
  const { getForecastDays } = useForecast(weather, setForecast);

  useEffect(() => {
    getForecastDays();
    console.log(forecast)
  }, []);
  
  return (
    <Container>
      {
       forecast && forecast.list.map((day) => (
        <ForecastDay 
          key={day.dt} 
          date={day.dt_txt}
          icon={day.weather[0].icon} 
          description={day.weather[0].description} 
          min={day.main.temp_min} 
          max={day.main.temp_max} 
        />
       ))
      }
    </Container>
  )
}