import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";
import { Evolution } from "@/types/Digimon";
import * as S from './styles'


type CardProps = {
    w: number;
    h: number;
    extra?: ReactElement;    
    evolutions: Evolution;
    evo:boolean
  };

const EvoCardBody = ({ w, h, extra, evolutions, evo }: CardProps) => {
  return (
    <S.Container evo={evo} >
      <Link key={evolutions.id} href={`/digimons/${evolutions.id}`}>
        <S.ImageWrapper>
          <Image
            key={evolutions.id}
            alt={evolutions.digimon}
            src={evolutions.image}
            width={w}
            height={h}
            priority
            className="h-full w-full rounded-md"
          />
        </S.ImageWrapper>
        <S.InfoWrapper>
          <S.Name>
            {evolutions.digimon}
          </S.Name>
        </S.InfoWrapper>
      </Link>
      <S.Extra>{extra}</S.Extra>
    </S.Container>
  );
};

export default EvoCardBody;
