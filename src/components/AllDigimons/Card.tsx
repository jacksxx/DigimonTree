import React, { ReactElement } from "react";
import Image from "next/image";
import { AllDigimon } from "@/types/AllDigimon";
import * as S from './styles'
type cardProps = {
  digimons: AllDigimon;
  w: number;
  h: number;
  extra?: ReactElement;
};

const Card = (params: cardProps) => {
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <Image
          alt={params.digimons.name}
          src={params.digimons.image}
          width={params.w}
          height={params.h}
          priority          
          className="h-full w-full rounded-md object-cover"
        />
      </S.ImageWrapper>
      <S.NameWrapper>
        <S.Name>
          {params.digimons.name}
        </S.Name>
      </S.NameWrapper>      
    </S.CardContainer>
  );
};

export default Card;
