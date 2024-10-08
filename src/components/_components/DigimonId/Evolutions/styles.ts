import styled, { keyframes } from "styled-components";

//styles of EvoCardBody
export const Container = styled.div<{ evo: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem 0rem;
  border-radius: 0.5rem;
  border: 2px solid black;
  box-shadow: 0 5px 10px black;
  ${({ evo }) =>
    evo == true
      ? `background: rgba(234 179 8/0.9);`
      : `background: rgba( 148 163 184/0.9); `}
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(0.9);
  }
`;
export const ImageWrapper = styled.div`
  overflow: hidden;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-radius: 0.125rem;
  transition: all 0.7s ease-in-out;
  &:hover {
    transform: scaleX(-1);
  }
  padding: 0 1.25rem;
  background: white;
`;
export const InfoWrapper = styled.div`
  margin: 0.5rem;
  text-align: center;
`;
export const Name = styled.h1`
  font-size: 12px;
  @media (min-width: 640px) {
    font-size: 12px;
    font-weight: 600;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: 600;
  }
  font-weight: 700;
  word-break: break-word;
  padding: 0.25rem;
`;
export const Extra = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: stick;
  bottom: 0px;
`;
//styles of EvoList
export const ListUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  border-radius: 0.5rem;
`;
//styles of Evolutions
export const EvoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export const EvoLabelCond = styled.h1`
  font-weight: 500;
  padding: 0 0.25rem;
  font-size: 12px;
  @media (min-width: 640px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
//styles of EvolutionsBody
export const GButton = styled.button<{ ev: boolean }>`
  border-radius: 9999px;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  background-color: #34d399;
  transform: ${({ ev }) => (ev ? "rotate(180deg)" : "rotate(0)")};
`;
export const RButton = styled.button`
  background-color: rgba(239 68 68);
  border-radius: 9999px;
`;
export const Condition = styled.p<{ ev: boolean; cond: string }>`
  border-radius: 99px;
  background-color: black;
  color: white;
  white-space: nowrap;
  ${({ cond }) =>
    cond.length >= 40 ? "font-size: 8.25px;" : "font-size: 12px;"}
  @media (min-width: 640px) {
    font-size: 12px;
  }
  ${({ ev }) =>
    ev
      ? "padding: 0.25rem; font-weight: 500; position: absolute; bottom: -30px; z: 20; "
      : "height: 0; visibility: hidden; opacity: 0;"}
`;
