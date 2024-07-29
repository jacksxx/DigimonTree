import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./styles";
import { DigiAll } from "@/types/DigiAll";

const Card = ({ digimons }: { digimons: DigiAll }) => {
  const [minHeight, setMinHeight] = useState("350px");
  useEffect(() => {
    const updateMinHeight = () => {
      if (window.innerWidth >= 1280) {
        setMinHeight("450px");
      } else {
        setMinHeight("350px");
      }
    };
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, []);
  return (
    <S.CardContainer key={digimons.id}>
      <S.ImageWrapper>
        <Image
          alt={digimons.name}
          src={digimons.image}
          width={350}
          height={350}
          quality={100}
          priority
          style={{
            minHeight: minHeight,
            width: "100%",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </S.ImageWrapper>
      <S.NameWrapper>
        <S.Name>{digimons.name}</S.Name>
      </S.NameWrapper>
    </S.CardContainer>
  );
};

export default Card;
