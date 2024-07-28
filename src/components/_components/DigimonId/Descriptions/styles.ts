import styled from "styled-components";

export const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 100%;  
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    max-width: 66.6667%;
  }

  @media (min-width: 1024px) {
    max-width: 33.3333%;
  }
`;
export const DescriptionHeader = styled.button<{ show: boolean }>`
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
  padding: 0.25rem 0;
  background-color: rgb(234 179 8);
  color: black;
  font-weight: bold;
  box-shadow: 0 8px 8px black;
  ${({ show }) =>
    show
      ? "border: 1px solid black; border-radius: 0.75rem 0.75rem 0 0;;"
      : "border: 2px solid black; border-radius: 0.75rem;"}
  &:hover {
    ${({ show }) => (show ? "" : "transform: scale(0.95);")}
  }
`;
export const Description = styled.p`
  text-align: center;
  background-color: black;
  color: rgb(234 179 8);
  padding: 0.5rem;
  overflow: hidden;
  border-radius: 0 0 0.75rem 0.75rem;
`;
