import { WeatherTop } from "../WeatherTop";
import { WeatherBottom } from "../WeatherBottom";
import { Container } from "./styles";

export const Weather = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind } = data;

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
    </Container>
  )
}