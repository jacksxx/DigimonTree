"use client";
import DigiCard from "@/components/DigimonId/DigiCard";
import EvoList from "@/components/Evolutions/EvoList";
import Loading from "@/components/Loading/Loading";
import NoDataMessage from "@/components/NoData/NoDataMessage";
import { useGetDigimonById } from "@/hooks/useGetDigimons";
import Link from "next/link";
import React from "react";
import * as S from "./styles";
import { SlArrowLeftCircle } from "react-icons/sl";
const PersonalPage = (params: any) => {
  const { digimon, isError, isLoading, refetch } = useGetDigimonById(
    params.params.id
  );
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
      <S.EvoContainer>
        <S.EvoWrapper>
          <S.EvoLabel>
            Evoluções Anteriores
          </S.EvoLabel>
          <EvoList
            digimon={digimon}
            key={digimon.id}
            evo={false}
            evolutions={digimon.priorEvolutions}
          />
        </S.EvoWrapper>
        <S.EvoWrapper>
          <S.EvoLabel >
            Próximas Evoluções
          </S.EvoLabel>
          <EvoList
            digimon={digimon}
            key={digimon.id}
            evo={true}
            evolutions={digimon.nextEvolutions}
          />
        </S.EvoWrapper>
      </S.EvoContainer>
    </>
  );
};

export default PersonalPage;
