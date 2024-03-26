"use client";
import DigiCard from "@/components/DigiCard";
import Loading from "@/components/Loading";
import NoDataMessage from "@/components/NoDataMessage";
import { useGetDigimonById } from "@/hooks/useGetDigimons";
import Link from "next/link";
import React from "react";

const PersonalPage = (params: any) => {
  const { digimon, isError, isLoading, refetch} = useGetDigimonById(
    params.params.id
  );  
  refetch()

  if (isLoading ) {
    return <Loading message="Carregando digimon" />;
  }
  if (isError || !digimon) {
    return <NoDataMessage />;
  }
  return (
    <>
      <Link
        href={"/digimons"}
        className="flex flex-col ring-1 ring-blue-400 bg-slate-200 p-1  w-[70px] text-center rounded-full font-medium"
      >
        Voltar
      </Link>
      <div className="flex items-center justify-center">
        <DigiCard digimons={digimon} key={digimon.id} />
      </div>
    </>
  );
};

export default PersonalPage;
