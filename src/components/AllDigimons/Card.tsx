import React, { ReactElement } from "react";
import Image from "next/image";
import { AllDigimon } from "@/types/AllDigimon";
import * as S from "./styles";
type cardProps = {
  digimons: AllDigimon;
  w: number;
  h: number;
  extra?: ReactElement;
};

const Card = ({ digimons, w, h }: cardProps) => {
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <Image
          alt={digimons.name}
          src={digimons.image}
          width={w}
          height={h}
          priority          
          className={`min-h-[350px] xl:min-h-[450px] w-full rounded-md`}
        />
      </S.ImageWrapper>
      <S.NameWrapper>
        <S.Name>{digimons.name}</S.Name>
      </S.NameWrapper>
    </S.CardContainer>
  );
};

export default Card;
