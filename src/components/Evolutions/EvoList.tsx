import { Digimon, Evolution } from "@/types/Digimon";
import React from "react";
import EvoCard from "./EvoCard";
import Evolutions from "./Evolutions";
import * as S from './styles'

type EvoListProps = {
  digimon: Digimon;
  evo: boolean;
  evolutions: Evolution[];
};

const EvoList = ({ digimon, evo, evolutions }: EvoListProps) => {
  console.log(digimon.levels);
  console.log(evo);
  console.log("evolutions", evolutions);
  return (
    <>
      <S.ListUl>
        {evolutions.map((evoItem: Evolution) => (
          <EvoCard
            h={150}
            w={150}
            key={evoItem.id}
            evo={evo}
            evolutions={evoItem}
            extra={
              <Evolutions evolutions={evoItem} nextEve={evo} key={evoItem.id} />
            }
          />
        ))}
      </S.ListUl>
    </>
  );
};

export default EvoList;