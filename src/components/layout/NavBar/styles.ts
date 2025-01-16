import styled from "styled-components";
import { colors, fonts } from "../../common/css";

export const NavBar = styled.nav`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1.25rem;
  text-align: center;
  background-image: radial-gradient(
    ellipse,
    ${colors.primary} 0%,
    ${colors.foreground} 100%
  );
`;

export const Link = styled.span`
  font-weight: ${fonts.semibold};
  font-size: 2rem;
  line-height: 2.25rem;
  color: ${colors.input};
  &:hover {
    color: ${colors.input_lighter};
    font-weight: ${fonts.bold};
  }
  border-radius: 0.375rem;
`;
