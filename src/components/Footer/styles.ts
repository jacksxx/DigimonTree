import styled from "styled-components";

export const Footer = styled.footer`
  position: static;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 2px solid #f59e0b;
  z-index: 0;
  bottom: 0;
  font-weight: 600;
  text-align: center;
  gap: 0.75rem;
  background-image: radial-gradient(
    ellipse,
    rgba(239, 68, 68, 1) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );  
  color: #f59e0b;
`;
