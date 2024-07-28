import styled from "styled-components";

//styles of Digimon List
export const ListaUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
//styles of Card
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
