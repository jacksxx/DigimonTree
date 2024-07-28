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
  font-size: 32px;
  font-weight: 600;
  overflow-wrap: break-word;
`;
export const Text = styled.p`
  overflow-wrap: break-word;
  font-size: 20px;
  font-weight: 500;
`;
export const Start = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  border-radius: 0.375rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-image: radial-gradient(ellipse, #dc2626, #d1d5db);
  border: 2px solid #dc2626;
  animation: pulse 2s infinite;
  transition: all 1000ms ease-in-out 100ms;
  &:hover {
    transform: scale(1.05);
    background-image: radial-gradient(ellipse, #dc2626, black);
    border: 2px solid #f59e0b;
    font-weight: 700;
    color: #f59e0b;
    opacity: 0.8;
    animation: none;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
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
