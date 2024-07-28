import styled from "styled-components";

export const BackButton = styled.button`
  border: 2px solid rgba(234 179 8 / 0.8);
  border-radius: 9999px;
  color: rgba(253 224 71);
  background: linear-gradient(
    to bottom,
    rgba(239 68 68 / 1),
    rgba(0 0 0 / 0.8)
  );
  margin-bottom: 2.5rem;
  padding: 0.5rem;
  padding-left: 1.55rem;
  padding-right: 1.55rem;
  width: 125px;
  text-align: center;
  font-weight: 500;
  &:hover {
    transform: scale(1.05);
  }
`;
export const Link = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;
export const InfoContainers = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;
export const EvoContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-bottom: 2px solid rgba(0, 0, 0);
  padding-bottom: 1rem;
  gap: 0.5rem;
`;
export const EvoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  align-items: center;
`;
export const EvoLabel = styled.button`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: rgba(0, 0, 0);
  text-decoration-line: underline;
  padding: 0.5rem;
  padding-left: 1.55rem;
  padding-right: 1.55rem;
  color: rgb(234 179 8);
  box-shadow: 0 8px 8px black;
  border: 2px solid rgba(234 179 8);
  border-radius: 2rem;
  overflow-wrap: break-word;
  @media (min-width: 640px) {
    font-size: 20px;
  }
  &:hover {
    transform: scale(0.95);
  }
`;
