import { Day, Description, Icon, Temp } from "./styles";

export const ForecastDay = ({ date, icon, description, min, max }) => {
  return (
    <Day>
      <Icon src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Forecast Icon" />
      <Description>{description}</Description>
      <Temp>Min: {min.toFixed()}°C</Temp>
      <Temp>Max: {max.toFixed()}°C</Temp>
    </Day>
  )
}