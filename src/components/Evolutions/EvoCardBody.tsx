import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";
import { Evolution } from "@/types/Digimon";
import * as S from "./styles";
import { useEvolution } from "@/hooks/useDigimon";

type CardProps = {
  w: number;
  h: number;
  extra?: ReactElement;
  evolutions: Evolution;
  evo: boolean;
};

const EvoCardBody = ({ w, h, extra, evolutions, evo }: CardProps) => {
  const { name } = useEvolution(evolutions);
  console.log(name);
  return (
    <S.Container evo={evo}>
      <Link key={evolutions.id} href={`/digimons/${evolutions.id}`}>
        <S.ImageWrapper>
          <Image
            key={evolutions.id}
            alt={evolutions.digimon}
            src={evolutions.image}
            width={w}
            height={h}
            priority
            className={`sm:min-h-[150px] md:min-h-[200px] w-full block rounded-md`}
          />
        </S.ImageWrapper>
        <S.InfoWrapper>
          <S.Name>{name}</S.Name>
        </S.InfoWrapper>
      </Link>
      <S.Extra>{extra}</S.Extra>
    </S.Container>
  );
};

export default EvoCardBody;
