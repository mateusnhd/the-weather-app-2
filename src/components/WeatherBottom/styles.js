import styled from "styled-components";

export const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.border};
`

export const Info = styled.p`
  font-weight: 700;
`

export const Paragraph = styled.p`
  font-size: 1.6rem;
`