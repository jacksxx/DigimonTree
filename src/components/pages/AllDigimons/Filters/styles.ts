import styled from "styled-components";
import { colors, fonts } from "@/components/common/css";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  grid-column: span 1;
`;
export const WrapperSearch = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  background: ${colors.foreground};
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
  border: 2px solid ${colors.input_lighter};
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
export const SearchConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  grid-column: span 1;
  @media (min-width: 768px) {
    grid-column: span 3;
  }
`;
export const ResetButton = styled.button`
  display: flex;
  flex-direction: column;
  background: ${colors.input};
  border: 1px solid ${colors.foreground};
  border-radius: 0.375rem;
  width: fit-content;
  padding: 0.25rem;
  font-weight: ${fonts.semibold};
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  grid-column: span 1;
  @media (min-width: 768px) {
    grid-column: span 3;
  }
  &:hover {
    transform: scale(0.9);
    opacity: 0.8;
    animation: all 500ms ease-in-out 100ms;
  }
`;
export const LabelSearch = styled.h1`
  font-size: 20px;
  font-weight: ${fonts.bold};
  color: rgba(234 179 8 / 0.8);
`;
export const LabelFilters = styled.h5`
  color: ${colors.input};
  font-weight: ${fonts.semibold};
`;
export const Input = styled.input`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: ${colors.input};
  border: 1px solid ${colors.foreground};
  border-radius: 0.375rem;
  width: 300px;
  &::placeholder {
    color: ${colors.foreground};
  }

  font-weight: 600;
`;
export const CheckedInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  box-shadow: 0 0 0 1px ${colors.input};
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 1px ${colors.input_lighter};
  }
`;
export const Select = styled.select`
  border: 1px solid ${colors.input};
  border-radius: 0.375rem;
  padding: 0.15rem;
  background: ${colors.foreground};
  color: ${colors.input};
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${colors.input_lighter};
  }
`;
export const Options = styled.option`
  background: black;
  color: ${colors.input};
  font-weight: ${fonts.semibold};
`;
