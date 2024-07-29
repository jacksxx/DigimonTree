import React from "react";
import Card from "./Card";
import Link from "next/link";
import * as S from "./styles";
import { DigiAll } from "@/types/DigiAll";

const DigimonList = ({ digimon }: { digimon: DigiAll[] }) => {
  return (
    <S.ListaUl>
      {digimon.map((digimons: DigiAll) => (
        <li
          key={digimons.id}
          className="hover:scale-90 m-1 transition duration-700"
        >
          <Link key={digimons.id} href={`/digimons/${digimons.id}`}>
            <Card digimons={digimons} key={digimons.id} />
          </Link>
        </li>
      ))}
    </S.ListaUl>
  );
};

export default DigimonList;
