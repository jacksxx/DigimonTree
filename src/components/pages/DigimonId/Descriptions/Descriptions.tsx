import { useState } from "react";
import * as S from "./styles";
import type { DigiDescription } from "@/types/Digimon";
import NoDataMessage from "@/components/common/NoData/NoDataMessage";

const Descriptions = ({ description }: { description: DigiDescription[] }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <S.DescriptionContainer>
      <S.DescriptionHeader onClick={() => setShow(!show)} $show={show}>
        Descrição
      </S.DescriptionHeader>
      {show && (
        <S.Description>
          {description.length > 0 ? (
            <>
              {description
                .filter((e) => e.language === "en_us")
                .map((descript) => (
                  <p key={descript.description}>
                    {descript.description !== "" ? descript.description : ""}
                  </p>
                ))}
            </>
          ) : (
            <h1 className="col-span-3 text-center">
              <NoDataMessage />
            </h1>
          )}
        </S.Description>
      )}
    </S.DescriptionContainer>
  );
};

export default Descriptions;
