"use client";
import DigiCard from "@/components/pages/DigimonId/DigiCard";
import EvoList from "@/components/pages/DigimonId/Evolutions/EvoList";
import Loading from "@/components/common/Loading/Loading";
import NoDataMessage from "@/components/common/NoData/NoDataMessage";
import { useState } from "react";
import * as S from "./styles";
import { SlArrowLeftCircle } from "react-icons/sl";
import Descriptions from "@/components/pages/DigimonId/Descriptions/Descriptions";
import Skills from "@/components/pages/DigimonId/Skills/Skills";
import { useParams, useRouter } from "next/navigation";
import { useGetDigimonById } from "@/services/digimons/queries";

const Digimon = () => {
  const router = useRouter();
  const params = useParams();
  const slug = String(params.slug).toLocaleLowerCase();
  const { digimon, isLoading } = useGetDigimonById(slug);
  const [showEvolutions, setShowEvolutions] = useState<{
    prev: boolean;
    next: boolean;
  }>({ prev: false, next: false });

  if (isLoading) {
    return <Loading message="Carregando digimon" />;
  }
  if (!digimon) {
    return <NoDataMessage />;
  }
  return (
    <>
      <S.BackButton>
        <S.Link onClick={() => router.back()}>
          <SlArrowLeftCircle />
        </S.Link>
      </S.BackButton>
      <S.CardContainer>
        <DigiCard digimon={digimon} key={digimon.id} />
      </S.CardContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <S.InfoContainers>
          <Descriptions description={digimon.descriptions} key={digimon.id} />
        </S.InfoContainers>
        <S.InfoContainers>
          <Skills skills={digimon.skills} key={digimon.id} />
        </S.InfoContainers>
      </div>
      <S.EvoContainer>
        <S.EvoWrapper>
          <S.EvoLabel
            onClick={() =>
              setShowEvolutions((prevState) => ({
                ...prevState,
                prev: !prevState.prev,
              }))
            }
          >
            Evoluções Anteriores
          </S.EvoLabel>
          <EvoList
            key={'prev'}
            isNextEvolution={false}
            evolutions={digimon.priorEvolutions}
            showEvolutions={showEvolutions.prev}
          />
        </S.EvoWrapper>
        <S.EvoWrapper>
          <S.EvoLabel
            onClick={() =>
              setShowEvolutions((prevState) => ({
                ...prevState,
                next: !prevState.next,
              }))
            }
          >
            Próximas Evoluções
          </S.EvoLabel>
          <EvoList
            key={'next'}
            isNextEvolution={true}
            evolutions={digimon.nextEvolutions}
            showEvolutions={showEvolutions.next}
          />
        </S.EvoWrapper>
      </S.EvoContainer>
    </>
  );
};

export default Digimon;
