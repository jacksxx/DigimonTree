"use client";
import Card from "@/components/Card";
import DigimonList from "@/components/DigimonList";
import Loading from "@/components/Loading";
import NoDataMessage from "@/components/NoDataMessage";
import SearchInput from "@/components/SearchInput";
import { useGetDigimons } from "@/hooks/useGetDigimons";
import { Digimon } from "@/types/Digimon";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { digimons, isError, isLoading } = useGetDigimons();

  const [filterDigimons, setFilterDigimons] = useState<Digimon[]>([]);

  useEffect(() => {
    if (!isLoading && digimons) {
      setFilterDigimons(digimons);
    }
  }, [isLoading, digimons]);

  function digimonsFilter(name: string) {
    setFilterDigimons(
      digimons?.filter((e: Digimon) =>
        e.name.toLowerCase().includes(name.trim().toLowerCase())
      ) ?? []
    );
  }

  if (isLoading) {
    return <Loading message="Carregando digimons" />;
  }
  if (isError || !digimons) {
    return <NoDataMessage />;
  }
  return (
    <>
    <div className="flex flex-col text-center justify-center pb-5">
      <h1 className="text-[18px] text-black/80 underline font-bold">Procure seu digimon aqui</h1>
      <SearchInput filterDigimon={digimonsFilter}/>
    </div>
    
    {digimons ? <DigimonList digimon={filterDigimons} /> : <p>Error</p>}</>
  );
};

export default Page;
