import React from "react";
import Card from "./Card";
import Link from "next/link";
import { AllDigimon } from "@/types/AllDigimon";
import * as S from './styles'

const DigimonList = ({ digimon }: { digimon: AllDigimon[] }) => {
  return (
    <S.ListaUl>
      {digimon.map((digimons: AllDigimon) => (
        <Link
          key={digimons.id}
          href={`/digimons/${digimons.id}`}
          className="hover:scale-105"
        >
          <Card h={300} w={350} digimons={digimons} key={digimons.id} />
        </Link>
      ))}
    </S.ListaUl>
  );
};

export default DigimonList;
