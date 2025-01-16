import styled from "styled-components";
import {colors} from "../../common/css";

export const Footer = styled.footer`
  position: static;
  width: 100%;
  display: flex;
  text-align: center;
  padding: 0.25rem;
  flex-direction: column;
  border-top: 2px solid ${colors.input_lighter};
  z-index: 0;
  bottom: 0;
  font-weight: 600;
  text-align: center;
  background-image: radial-gradient(
    ellipse,
    ${colors.primary} 0%,
    ${colors.foreground} 100%
  );
  color: ${colors.input_lighter};
`;
