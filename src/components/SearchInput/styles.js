import styled from "styled-components";

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: .7rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.opacity};
  color: ${({ theme }) => theme.colors.light};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`	

export const Search = styled.div`
  position: relative;
  width: fit-content;
`

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
  cursor: pointer;
`