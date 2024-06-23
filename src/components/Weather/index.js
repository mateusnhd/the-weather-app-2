import { WeatherTop } from "../WeatherTop";
import { WeatherBottom } from "../WeatherBottom";
import { Container, Title } from "./styles";
import { Forecast } from "components/Forecast";

export const Weather = ({ weatherData, forecast, setForecast }) => {
  const { name, main, weather, wind } = weatherData;

  return (
    <Container>
      <WeatherTop 
        name={name} 
        temp={main?.temp} 
        description={weather[0]?.description} 
      />
      <WeatherBottom 
        feels_like={main?.feels_like} 
        humidity={main?.humidity} 
        windSpeed={wind?.speed} 
      />
      <Title>Previsão para hoje</Title>
      <Forecast weather={weatherData} forecast={forecast} setForecast={setForecast} />
    </Container>
  )
}