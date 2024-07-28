import React from "react";
import Card from "./Card";
import Link from "next/link";
import * as S from "./styles";
import { DigiAll } from "@/types/DigiAll";

const DigimonList = ({ digimon }: { digimon: DigiAll[] }) => {
  return (
    <S.ListaUl>
      {digimon.map((digimons: DigiAll) => (
        <Link
          key={digimons.id}
          href={`/digimons/${digimons.id}`}
          className="hover:scale-90 m-1 transition duration-700"
        >
          <Card h={350} w={350} digimons={digimons} key={digimons.id} />
        </Link>
      ))}
    </S.ListaUl>
  );
};

export default DigimonList;
