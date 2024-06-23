import styled from "styled-components";

export const Container = styled.div`
  max-width: 550px;
  height: 550px;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${({ theme }) => theme.animations.fadeIn} 0.5s ease-in-out;
`