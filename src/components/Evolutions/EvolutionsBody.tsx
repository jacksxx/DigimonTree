import { Evolution } from "@/types/Digimon";
import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import * as S from "./styles";

type EvoProps = {
  evolutions: Evolution;
  ev: boolean;
  setEv: React.Dispatch<React.SetStateAction<boolean>>;
};
const EvolutionsBody = ({ evolutions, ev, setEv }: EvoProps) => {
  return (
    <S.EvoContainer>
      {evolutions.condition !== "" ? (
        <S.GButton onClick={() => setEv(!ev)} ev={ev}>
          <FaChevronCircleDown />
        </S.GButton>
      ) : (
        <S.RButton>
          <FaChevronCircleDown />
        </S.RButton>
      )}
      {ev ? <S.Condition ev={ev}>*{evolutions.condition}*</S.Condition> : ""}
    </S.EvoContainer>
  );
};

export default EvolutionsBody;
