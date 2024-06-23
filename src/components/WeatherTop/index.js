import { Top, Paragraph, Title, Description } from "./styles";

export const WeatherTop = ({ name, temp, description }) => {
  return (
    <Top>
      <div>
        <Paragraph>{name}</Paragraph>
      </div>
      <div>
        <Title>{temp?.toFixed()}°C</Title>
      </div>
      <Description>
        <Paragraph>{description}</Paragraph>
      </Description>
    </Top>
  );
}