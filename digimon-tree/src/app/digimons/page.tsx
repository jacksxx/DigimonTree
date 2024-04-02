"use client";
import DigimonList from "@/components/DigimonList";
import Loading from "@/components/Loading";
import NoDataMessage from "@/components/NoDataMessage";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import { useGetDigimons } from "@/hooks/useGetDigimons";
import { AllDigimon } from "@/types/AllDigimon";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { digimons, isError, isLoading } = useGetDigimons();
  const [filterDigimons, setFilterDigimons] = useState<AllDigimon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!isLoading && digimons) {
      setFilterDigimons(digimons);
    }
  }, [isLoading, digimons]);

  function digimonsFilter(name: string) {
    setFilterDigimons(
      digimons?.filter((e: AllDigimon) =>
        e.name.toLowerCase().includes(name.trim().toLowerCase())
      ) ?? []
    );
  }
  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <Loading message="Carregando digimons" />;
  }
  if (isError || !digimons) {
    return <NoDataMessage />;
  }
  const indexOfLastDigimon = currentPage * 20;
  const indexOfFirstDigimon = indexOfLastDigimon - 20;
  const currentDigimons = filterDigimons.slice(
    indexOfFirstDigimon,
    indexOfLastDigimon
  );

  return (
    <>
      <div className="flex flex-col text-center justify-center pb-5">
        <h1 className="text-[18px] text-black/80 underline font-bold">
          Procure seu digimon aqui
        </h1>
        <SearchInput filterDigimon={digimonsFilter} />
      </div>
      {digimons ? <DigimonList digimon={currentDigimons} /> : <p>Error</p>}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filterDigimons.length / 20)}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Page;
