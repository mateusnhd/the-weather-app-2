import { ThemeProvider } from "styled-components";
import { SearchInput, Container, Weather, Title, FindContainer } from "./components";
import { theme } from "themes/theme";
import { GlobalStyles } from "themes/globalStyles";
import { useWeather } from "hooks/useWeather";

export const App = () => {
  const { searchLocation, data, search, setSearch } = useWeather();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        { !data && (
          <FindContainer>
            <Title>Weather App</Title>
            <SearchInput fn={searchLocation} setValue={setSearch} value={search} />
          </FindContainer>
        )}
        { data && <Weather data={data} />}
      </Container>
    </ThemeProvider>
  );
}