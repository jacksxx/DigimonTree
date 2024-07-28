import React, { ReactElement } from "react";
import Image from "next/image";
import * as S from "./styles";
import { DigiAll } from "@/types/DigiAll";
type cardProps = {
  digimons: DigiAll;
  w: number;
  h: number;
  extra?: ReactElement;
};

const Card = ({ digimons, w, h }: cardProps) => {
  return (
    <S.CardContainer key={digimons.id}>
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
