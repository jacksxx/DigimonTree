import { colors, fonts } from "@/components/common/css";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
  border-radius: 0.375rem;
  max-width: 900px;
  min-heigth: 500px;
  padding: 2.5rem;
  gap: 2.25rem;
  justify-content: center;
  align-items: center;
  background-color: rgb(241 245 249 / 0.8);
`;
export const Header = styled.h1`
  font-size: 2rem;
  line-heigth: 2.25rem;
  font-weight: ${fonts.semibold};
  overflow-wrap: break-word;
`;
export const Text = styled.p`
  overflow-wrap: break-word;
  font-size: 1.25rem;
  font-weight: ${fonts.medium};
`;
export const Start = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: ${fonts.semibold};
  border-radius: 0.375rem;
  padding: 0.5rem;
  background-image: radial-gradient(
    ellipse,
    ${colors.primary_lighter},
    #d1d5db
  );
  border: 2px solid ${colors.primary_lighter};
  animation: pulse 2s infinite;
  transition: all 500ms ease-in-out 100ms;
  &:hover {
    background-image: radial-gradient(
      ellipse,
      ${colors.primary_lighter},
      ${colors.foreground}
    );
    border: 2px solid ${colors.input_lighter};
    font-weight: ${fonts.bold};
    color: ${colors.input_lighter};
    opacity: 0.8;
    animation: pulse-fade-out 500ms ease-in-out forwards;
  }
  @keyframes pulse-fade-out {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
  }
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  @media (min-width: 640px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.25);
    }
  }
  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.5);
    }
  }
`;
