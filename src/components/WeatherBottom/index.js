import { Bottom, Info, Paragraph } from "./styles";

export const WeatherBottom = ({ feels_like, humidity, windSpeed }) => {

  return (
    <Bottom>
      <div>
        <Info>{feels_like.toFixed()}°C</Info>
        <Paragraph>Sensação Térmica</Paragraph>
      </div>
      <div>
        <Info>{humidity}%</Info>
        <Paragraph>Umidade</Paragraph>
      </div>
      <div>
        <Info>{windSpeed?.toFixed()} km/h</Info>
        <Paragraph>Velocidade do Vento</Paragraph>
      </div>
    </Bottom>
  )
}