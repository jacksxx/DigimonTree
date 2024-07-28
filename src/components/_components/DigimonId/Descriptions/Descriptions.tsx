import { useDigimon } from "@/hooks/useDigimon";
import { DigiAll } from "@/types/DigiAll";
import React, { useState } from "react";
import * as S from "./styles";

const Descriptions = ({ digimons }: { digimons: DigiAll }) => {
  const { description } = useDigimon(digimons);
  const [show, setShow] = useState(false);
  return (
    <S.DescriptionContainer>
      <S.DescriptionHeader onClick={() => setShow(!show)} show={show}>
        Description
      </S.DescriptionHeader>
      {show && (
        <S.Description>
          {description.length > 0 && description[0] !== ""
            ? description[0]
            : "No description available"}
        </S.Description>
      )}
    </S.DescriptionContainer>
  );
};

export default Descriptions;
