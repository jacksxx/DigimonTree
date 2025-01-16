import styled from "styled-components";

export const ListaUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
export const ListaLI = styled.li`
  margin: 0.25rem;
  transition: transform 0.7s ease;

  &:hover {
    transform: scale(0.9);
  }
`;
export const CardContainer = styled.div`
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: black;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 1), 0 4px 6px -2px rgba(0, 0, 0, 1);
  background-color: bisque;
`;
export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 0.75rem;
  width: 100%;
  height: 100%;
  min-height: 300px;
  max-height: 550px;
  position: relative;
  @media (min-width: 768px) {
    min-height: 450px;
  }
`;
export const NameWrapper = styled.div`
  margin: 0.5rem;
  text-align: center;
`;
export const Name = styled.h1`
  font-size: 20px;
  @media (min-width: 640px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
  font-weight: 600;
  text-decoration: underline;
  text-decoration-offset: 2px;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding-bottom: 1.25rem;
  align-items: center;
`;
export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0 0 0 / 0.7);
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
  border: 2px solid rgba(234 179 8 / 0.8);
`;
export const LabelSearch = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: rgba(234 179 8 / 0.8);
  text-decoration-line: underline;
  text-underline-offset: 2px;
`;
