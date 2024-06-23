import styled from "styled-components";
import Background from "./../../assets/images/background.webp";

export const Container = styled.main`
  font-family: ${({ theme }) => theme.fonts.primary};
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mask};
  color: ${({ theme }) => theme.colors.light};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    content: '';
    background: url(${Background}) no-repeat center center/cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`