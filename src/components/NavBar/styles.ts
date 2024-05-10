import styled from "styled-components";

export const NavBar = styled.nav`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1.25rem;
  text-align: center;
  background-image: radial-gradient(
    ellipse,
    rgba(239, 68, 68, 1) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

export const Link = styled.span`
  font-weight: 600;
  font-size: 32px;
  color: #f59e0b;
  background-color: rgba(239, 68, 68, 0.1);
  &:hover {
    color: #fcd34d;
    font-weight: 700;
  }
  border-radius: 0.375rem;
  padding: 0.5rem;
`;
