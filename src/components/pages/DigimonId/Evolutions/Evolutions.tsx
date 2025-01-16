import { useState } from "react";
import * as S from "./styles";
import { FaChevronCircleDown } from "react-icons/fa";
import type { DigiEvolution } from "@/types/Digimon";

const Evolutions = ({ evolutions }: { evolutions: DigiEvolution }) => {
  const [ev, setEv] = useState(false);
  return (
    <S.EvoContainer>
      <S.EvoLabelCond>Condição de Evolução:</S.EvoLabelCond>
      {evolutions.condition !== "" ? (
        <S.GButton onClick={() => setEv(!ev)} $ev={ev}>
          <FaChevronCircleDown />
        </S.GButton>
      ) : (
        <S.RButton>
          <FaChevronCircleDown />
        </S.RButton>
      )}
      {ev && (
        <S.Condition>
          <p>*{evolutions.condition}*</p>
          <S.CloseButton type="button" onClick={() => setEv(false)}>
            X
          </S.CloseButton>
        </S.Condition>
      )}
    </S.EvoContainer>
  );
};

export default Evolutions;
