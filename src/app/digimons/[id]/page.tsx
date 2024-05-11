"use client";
import DigiCard from "@/components/DigimonId/DigiCard";
import EvoList from "@/components/Evolutions/EvoList";
import Loading from "@/components/Loading/Loading";
import NoDataMessage from "@/components/NoData/NoDataMessage";
import { useGetDigimonById } from "@/hooks/useGetDigimons";
import Link from "next/link";
import React from "react";

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
      <Link
        href={"/digimons"}
        className="flex flex-col text-yellow-300 border-2 border-yellow-500/80 bg-gradient-to-br from-red-500 to-black/90 p-2 px-5 mb-10 w-[100px] text-center rounded-full font-medium"
      >
        Voltar
      </Link>
      <div className="flex items-center justify-center pb-4">
        <DigiCard digimons={digimon} key={digimon.id} />
      </div>
      <div className="grid grid-flow-col grid-cols-2 border-b-2 border-black ">
        <div className=" flex flex-col gap-y-3  items-center">
          <h1 className="text-center text-[20px] font-semibold bg-black underline p-2 text-yellow-500 rounded-sm border-2 border-yellow-500 ">
            Evoluções Anteriores
          </h1>
          <EvoList
            digimon={digimon}
            key={digimon.id}
            evo={false}
            evolutions={digimon.priorEvolutions}
          />
        </div>
        <div className=" flex flex-col gap-y-3 items-center ">
          <h1 className="text-center text-[20px] font-semibold bg-black text-yellow-500 rounded-sm p-2  border-2 border-yellow-500 underline">
            Proximas Evoluções
          </h1>
          <EvoList
            digimon={digimon}
            key={digimon.id}
            evo={true}
            evolutions={digimon.nextEvolutions}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
