import { colors, fonts } from "@/components/common/css";
import styled, { keyframes } from "styled-components";

//styles of DigiCard

export const Container = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border: 2px solid black;
  position: relative;
  box-shadow: 0 2px 5px black;
  background-color: white;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
  max-width: 550px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
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
export const xAntibody = styled.h5`
  position: absolute;
  padding: 0.25rem;
  top: 0rem;
  right: 0rem;
  font-size: 14px;
  font-weight: ${fonts.extrabold};
  font-style: italic;
  cursor: default;
  background: linear-gradient(45deg, silver, purple);
  color: white;
  border-radius: 0 5px 0 9px;
`;
export const ReleaseDate = styled.h5`
  position: absolute;
  padding: 0.25rem;
  bottom: 0rem;
  left: 0rem;
  font-size: 14px;
  font-weight: ${fonts.extrabold};
  font-style: italic;
  color: black;
`;
export const ImageWrapper = styled.div`
  overflow: hidden;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: black;
  border-radius: 0.125rem;
  background: white;
  width: 100%;
  height: 100%;
  min-height: 350px;
  position: relative;
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
`;
export const InfoWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  text-align: center;
`;
export const InfoLabel = styled.h1`
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
  align-itens: center;
  gap: 0.75rem;
  @media (min-width: 640px) {
    gap: 2.5rem;
  }
`;

////

export const BackButton = styled.button`
  border: 2px solid ${colors.input};
  border-radius: 9999px;
  color: rgba(253 224 71);
  background: linear-gradient(
    to bottom,
    rgba(239 68 68 / 1),
    rgba(0 0 0 / 0.8)
  );
  margin-bottom: 2.5rem;
  padding: 0.5rem;
  min-width: 65px;
  text-align: center;
  font-weight: 500;
  &:hover {
    transform: scale(0.95);
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
  margin-bottom: 2.5rem;
`;
export const InfoContainers = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  margin-bottom: 2rem;
`;
export const EvoContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-bottom: 2px solid rgba(0, 0, 0);
  padding-bottom: 1rem;
  gap: 0.25rem;
`;
export const EvoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EvoLabel = styled.button`
  text-align: center;
  font-size: 14px;
  font-weight: ${fonts.semibold};
  background: rgb(234 179 8);
  padding: 0.25rem;
  box-shadow: 0 8px 8px black;
  border: 2px solid rgba(0, 0, 0);
  border-radius: 2rem;
  overflow-wrap: break-word;
  @media (min-width: 640px) {
    font-size: 20px;
    padding: 0.35rem;
  }
  &:hover {
    transform: scale(0.95);
  }
`;

////

export const FieldSetImage = styled.span`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
`;

export const FieldSetContainer = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

export const FieldSetName = styled.p<{
  $backgroundColor: string;
  $visible: boolean;
}>`
  position: absolute;
  padding: 0.15rem 0.25rem;
  bottom: -2.95rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $backgroundColor }) =>
    $backgroundColor === "#000" ||
    $backgroundColor === "#645A5D" ||
    $backgroundColor === "#475894" ||
    $backgroundColor === "#4468A5"
      ? "white"
      : "black"};
  border-radius: 9px;
  font-weight: ${fonts.semibold};
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
`;

// Skeleton pulse animation
const pulse = keyframes`
  0% {
    background-color: #eeeeee;
  }
  50% {
    background-color: #dddddd;
  }
  100% {
    background-color: #eeeeee;
  }
`;

export const BackButtonSkeleton = styled.button`
  width: 65px;
  height: 35px;
  border-radius: 9999px;
  background: linear-gradient(to bottom, #ef4444, rgba(0, 0, 0, 0.8));
  border: 2px solid #fcd34d;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-bottom: 2.5rem;
`;



export const DigiCardSkeleton = styled.div`
  width: 350px;
  min-width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px black;
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const ImageSkeleton = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 0.125rem;
  background-color: #ddd;
`;

export const NameSkeleton = styled.div`
  height: 30px;
  width: 60%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #ddd;
`;

export const InfoWrapperSkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const InfoBlockSkeleton = styled.div`
  height: 20px;
  border-radius: 5px;
  background-color: #ddd;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const DescriptionSkeleton = styled.div`
  flex: 1;
  height: 120px;
  border-radius: 8px;
  background-color: #ddd;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const SkillsSkeleton = styled.div`
  flex: 1;
  height: 120px;
  border-radius: 8px;
  background-color: #ddd;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const EvoLabelSkeleton = styled.div`
  width: 140px;
  height: 30px;
  border-radius: 20px;
  background-color: #fbbf24; // amarelo parecido com o botão real
  box-shadow: 0 8px 8px black;
  border: 2px solid rgba(0, 0, 0, 1);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const EvoListSkeleton = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  background-color: #ddd;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;
