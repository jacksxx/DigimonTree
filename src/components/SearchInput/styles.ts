import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;
export const Input = styled.input`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: rgba(255, 213, 79, 0.7);
  border: 1px solid #000;
  border-radius: 0.375rem;
  width: 300px;
  &::placeholder {
    color: #000;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000;
  }
  font-weight: 600;
`;
