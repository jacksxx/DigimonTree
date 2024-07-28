import { DigiAll, Evolution } from "@/types/DigiAll";
import React from "react";
import EvoCard from "./EvoCard";
import Evolutions from "./Evolutions";
import * as S from "./styles";
import NoDataMessage from "../../../NoData/NoDataMessage";

type EvoListProps = {
  evo: boolean;
  evolutions: Evolution[];
  show: boolean;
};

const EvoList = ({ evo, evolutions, show }: EvoListProps) => {
  return (
    <>
      {show && (
        <>
          {evolutions && evolutions.length > 0 ? (
            <S.ListUl>
              {evolutions.map((evoItem: Evolution) => (
                <EvoCard
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
      )}
    </>
  );
};

export default EvoList;
