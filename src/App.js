import { ThemeProvider } from "styled-components";
import { SearchInput, Container, Weather, Title, FindContainer } from "./components";
import { theme } from "themes/theme";
import { GlobalStyles } from "themes/globalStyles";
import { useWeather } from "hooks/useWeather";

export const App = () => {
  const { searchLocation, weather, forecast, setForecast, search, setSearch } = useWeather();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        { !weather && (
          <FindContainer>
            <Title>Weather App</Title>
            <SearchInput fn={searchLocation} setValue={setSearch} value={search} />
          </FindContainer>
        )}
        { weather && <Weather weatherData={weather} forecast={forecast} setForecast={setForecast} />}
      </Container>
    </ThemeProvider>
  );
}