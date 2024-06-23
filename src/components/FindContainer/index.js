import styled from "styled-components";

export const FindContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({ theme }) => theme.animations.fadeIn} 0.5s ease-in-out;
`;