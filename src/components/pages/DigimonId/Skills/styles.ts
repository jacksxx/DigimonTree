import { fonts } from "@/components/common/css";
import styled from "styled-components";

export const SkillContainer = styled.div`
  max-width: 100%;
  width: 100%;
  max-height: 25rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    max-width: 66.6667%;
  }
`;
export const SkillHeader = styled.button<{ $show: boolean }>`
  padding: 0.25rem 0;
  text-align: center;
  font-size: 1.25rem;
  width: 100%;
  background-color: rgb(234 179 8);
  color: black;
  font-weight: ${fonts.bold};
  box-shadow: 0 8px 8px black;
  border: 2px solid black;
  border-radius: 0.75rem;
  ${({ $show }) =>
    $show
      ? "border: 1px solid black; border-radius: 0.75rem 0.75rem 0 0;;"
      : "border: 2px solid black; border-radius: 0.75rem;"}
  &:hover {
    ${({ $show }) => ($show ? "" : "transform: scale(0.95);")}
  }
`;

export const Skills = styled.div`
  background-color: black;
  color: rgb(234 179 8);
  padding: 0.5rem;
  overflow: auto;
  border-radius: 0 0 0.75rem 0.75rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  gap: 1rem;
`;
