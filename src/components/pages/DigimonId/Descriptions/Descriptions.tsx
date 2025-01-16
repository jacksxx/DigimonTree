import { useState } from "react";
import * as S from "./styles";
import type { DigiDescription } from "@/types/Digimon";

const Descriptions = ({ description }: { description: DigiDescription[] }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <S.DescriptionContainer>
      <S.DescriptionHeader onClick={() => setShow(!show)} $show={show}>
        Descrição
      </S.DescriptionHeader>
      {show && (
        <S.Description>
          {description
            .filter((e) => e.language === "en_us")
            .map((descript) => (
              <p key={descript.description}>
                {descript.description !== "" ? descript.description : ""}
              </p>
            ))}
        </S.Description>
      )}
    </S.DescriptionContainer>
  );
};

export default Descriptions;
