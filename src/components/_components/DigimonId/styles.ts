import styled from "styled-components";

//styles of DigiCard

export const Container = styled.div`
  margin: 2rem;
  border-radius: 0.5rem;
  border: 2px solid black;
  box-shadow: 0 2px 5px black;
  background-color: white;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(0.9);
  }
  max-width: 750px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding-top: 0.5rem;
  padding-bottom: 1.25rem;
  row-gap: 1.25rem;
  background: linear-gradient(
    -72deg,
    #ffde45,
    #ffffff 16%,
    #ffde45 21%,
    #ffffff 24%,
    #452100 27%,
    #ffde45 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffde45 72%,
    #ffffff 80%,
    #ffde45 84%,
    #452100
  );
`;
export const Id = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 0.25rem;
  font-size: 14px;
  font-weight: 800;
  font-style: italic;
`;
export const ImageWrapper = styled.div`
  overflow: hidden;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: black;
  border-radius: 0.125rem;
  background: white;
  transition: all 0.7s ease-in-out;
  &:hover {
    transform: scaleX(-1);
  }
`;
export const InfoContaniner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25;
  gap: 0.5rem;
  margin: 0.5rem;
`;
export const Name = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  text-decoration-line: underline;
  text-underline-offset: 2px;
`;
export const InfoWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  text-align: center;
`;
export const InfoLabel = styled.h1`
  text-decoration-line: underline;
  font-size: 26px;
  font-weight: 600;
`;
export const Infos = styled.h2`
  font-family: sans-serif;
  font-style: italic;
  font-size: 18px;
`;
export const FieldSets = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-itens: center;
  gap: 1.5rem;
  @media (min-width: 640px) {
    gap: 2.5rem;
  }  
`;
