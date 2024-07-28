import styled from "styled-components";

export const SkillContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    max-width: 66.6667%;
  }

  @media (min-width: 1024px) {
    max-width: 33.3333%;
  }
`;
export const SkillHeader = styled.button<{ show: boolean }>`
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1.25rem;
  background-color: rgb(234 179 8);
  color: black;
  font-weight: bold;
  box-shadow: 0 8px 8px black;
  border: 2px solid black;
  border-radius: 0.75rem;
  &:hover {
    ${({ show }) => (show ? "" : "transform: scale(0.95);")}
  }
`;

export const Skills = styled.p`
  background-color: black;
  color: rgb(234 179 8);
  padding: 0.5rem;
  overflow: hidden;
  border-radius: 0.75rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  gap: 1rem;
`;
