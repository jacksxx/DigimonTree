import { Digimon, Evolution } from "@/types/Digimon";
import React from "react";
import EvoCard from "./EvoCard";
import Evolutions from "./Evolutions";
import * as S from "./styles";
import NoDataMessage from "../NoData/NoDataMessage";

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
      <>
        {evolutions && evolutions.length > 0 ? (
          <S.ListUl>
            {evolutions.map((evoItem: Evolution) => (
              <EvoCard
                h={150}
                w={150}
                key={evoItem.id}
                evo={evo}
                evolutions={evoItem}
                extra={
                  <Evolutions
                    evolutions={evoItem}
                    nextEve={evo}
                    key={evoItem.id}
                  />
                }
              />
            ))}
          </S.ListUl>
        ) : (
          <NoDataMessage />
        )}
      </>
    </>
  );
};

export default EvoList;
