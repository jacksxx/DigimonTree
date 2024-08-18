import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import { Evolution } from "@/types/DigiAll";
import * as S from "./styles";
import { useEvolution } from "@/hooks/useDigimon";

type CardProps = {
  extra?: ReactElement;
  evolutions: Evolution;
  evo: boolean;
};

const EvoCardBody = ({ extra, evolutions, evo }: CardProps) => {
  const { name } = useEvolution(evolutions);
  const [minHeight, setMinHeight] = useState("100px");
  useEffect(() => {
    const updateMinHeight = () => {
      if (window.innerWidth >= 1580) {
        setMinHeight("350px");
      } else if (window.innerWidth >= 1280) {
        setMinHeight("300px");
      } else if (window.innerWidth >= 768) {
        setMinHeight("200px");
      } else {
        setMinHeight("100px");
      }
    };
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, []);
  return (
    <S.Container evo={evo}>
      <Link key={evolutions.id} href={`/digimons/${evolutions.id}`}>
        <S.ImageWrapper>
          <Image
            key={evolutions.id}
            alt={evolutions.digimon}
            src={evolutions.image}
            width={200}
            height={100}
            quality={100}
            priority
            style={{
              minHeight: minHeight,
              width: "100%",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </S.ImageWrapper>
        <S.InfoWrapper>
          <S.Name>{name}</S.Name>
        </S.InfoWrapper>
      </Link>
      <S.Extra>{extra}</S.Extra>
    </S.Container>
  );
};

export default EvoCardBody;
