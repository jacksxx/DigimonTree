import { colors, fonts } from "@/components/common/css";
import styled from "styled-components";

//styles of EvoCard
export const Container = styled.div<{ $isNextEvolution: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0rem;
  border-radius: 0.5rem;
  border: 2px solid white;
  box-shadow: 0 2px 5px white;
  ${({ $isNextEvolution }) =>
    $isNextEvolution === true
      ? `background: ${colors.input};`
      : "background: rgba( 148 163 184/0.8); "}
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
`;
export const ImageWrapper = styled.div`
  overflow: hidden;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-radius: 0.125rem;
  width: 100%;
  min-width: 150px;
  height: 150px;
  position: relative;
  transition: all 0.7s ease-in-out;
  &:hover {
    transform: scaleX(-1);
  }
  @media (min-width: 640px) {
    height: 200px;
  }
  @media (min-width: 840px) {
    height: 250px;
    min-width: 200px;
  }
  @media (min-width: 1720px) {
    min-width: 250px;
  }
`;
export const InfoWrapper = styled.div`
  margin: 0.25rem;
  text-align: center;
`;
export const Name = styled.h1`
  font-size: 12px;
  @media (min-width: 640px) {
    font-size: 12px;
    font-weight: ${fonts.semibold};
  }
  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: ${fonts.semibold};
    padding: 0.25rem 0rem;
  }
  font-weight: ${fonts.bold};
`;
export const Extra = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: stick;
  bottom: 0px;
`;
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
export const GButton = styled.button<{ $ev: boolean }>`
  border-radius: 9999px;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  background-color: #34d399;
  transform: ${({ $ev }) => ($ev ? "rotate(180deg)" : "rotate(0)")};
`;
export const RButton = styled.button`
  background-color: rgba(239 68 68);
  border-radius: 9999px;
`;
export const Condition = styled.p`
  border-radius: 9px;
  border: 2px solid ${colors.input};
  background-color: black;
  color: white;
  z-index: 50;
  padding: 0.85rem;
  white-space: wrap;
  width: 140px;
  overflow-wrap: break-word;
  overflow: auto;
  color: ${colors.input_lighter};
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  bottom: -2.25rem;
  @media (min-width: 640px) {
    font-size: 12px;
    width: 200px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  color: ${colors.primary_lighter};
  top: 0rem;
  right: 0rem;
  cursor: pointer;
  width: fit-content;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  border-radius: 999px;
`;

//styles of EvoList
export const ListUl = styled.ul`
  display: grid;
  margin-top: 1rem;
  height: 45rem;
  overflow: auto;
  background: ${colors.foreground};
  border: 1px solid ${colors.input};
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1536px) {
    grid-template-columns: repeat(3, 1fr);
  }
  border-radius: 0.5rem;
`;
export const ListLI = styled.li`
  margin: 0.15rem;
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    margin: 0.5rem;
  }
`;
