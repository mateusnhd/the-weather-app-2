import styled from "styled-components";

export const Container = styled.div`
  max-width: 550px;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${({ theme }) => theme.animations.fadeIn} 0.5s ease-in-out;
`
export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  padding-top: 16px;
  padding-bottom: 10px;
`