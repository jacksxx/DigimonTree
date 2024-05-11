import { Evolution } from "@/types/Digimon";
import React, { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import * as S from "./styles";
import EvolutionsBody from "./EvolutionsBody";

type EvoProps = {
  evolutions: Evolution;
  nextEve: boolean;
};

const Evolutions = ({ evolutions, nextEve }: EvoProps) => {
  const [ev, setEv] = useState(false);
  return (
    <S.EvoContainer>
      <S.EvoLabelCond>Condição de Evolução:</S.EvoLabelCond>
      {nextEve ? (
        <EvolutionsBody ev={ev} evolutions={evolutions} setEv={setEv} />
      ) : (
        <EvolutionsBody ev={ev} evolutions={evolutions} setEv={setEv} />
      )}
    </S.EvoContainer>
  );
};

export default Evolutions;
