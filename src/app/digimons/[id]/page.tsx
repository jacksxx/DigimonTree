"use client";
import DigiCard from "@/components/_components/DigimonId/DigiCard";
import EvoList from "@/components/_components/DigimonId/Evolutions/EvoList";
import Loading from "@/components/Loading/Loading";
import NoDataMessage from "@/components/NoData/NoDataMessage";
import { useGetDigimonById } from "@/hooks/useGetDigimons";
import Link from "next/link";
import React, { useState } from "react";
import * as S from "./styles";
import { SlArrowLeftCircle } from "react-icons/sl";
import Descriptions from "@/components/_components/DigimonId/Descriptions/Descriptions";
import Skills from "@/components/_components/DigimonId/Skills/Skills";

const PersonalPage = (params: any) => {
  const { digimon, isError, isLoading, refetch } = useGetDigimonById(
    params.params.id
  );
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  refetch();

  if (isLoading) {
    return <Loading message="Carregando digimon" />;
  }
  if (isError || !digimon) {
    return <NoDataMessage />;
  }
  return (
    <>
      <S.BackButton>
        <Link href={"/digimons"}>
          <S.Link>
            <SlArrowLeftCircle /> Voltar
          </S.Link>
        </Link>
      </S.BackButton>
      <S.CardContainer>
        <DigiCard digimons={digimon} key={digimon.id} />
      </S.CardContainer>
      <S.InfoContainers>
        <Descriptions digimons={digimon} key={digimon.id} />
      </S.InfoContainers>
      <S.InfoContainers>
        <Skills digimons={digimon} key={digimon.id} />
      </S.InfoContainers>
      <S.EvoContainer>
        <S.EvoWrapper>
          <S.EvoLabel onClick={() => setPrev(!prev)}>
            Evoluções Anteriores
          </S.EvoLabel>
          <EvoList
            key={digimon.id}
            evo={false}
            evolutions={digimon.priorEvolutions}
            show={prev}
          />
        </S.EvoWrapper>
        <S.EvoWrapper>
          <S.EvoLabel onClick={() => setNext(!next)}>
            Próximas Evoluções
          </S.EvoLabel>
          <EvoList
            key={digimon.id}
            evo={true}
            evolutions={digimon.nextEvolutions}
            show={next}
          />
        </S.EvoWrapper>
      </S.EvoContainer>
    </>
  );
};

export default PersonalPage;
