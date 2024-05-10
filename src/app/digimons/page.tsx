"use client";
import DigimonList from "@/components/AllDigimons/DigimonList";
import Loading from "@/components/Loading/Loading";
import NoDataMessage from "@/components/NoData/NoDataMessage";
import Pagination from "@/components/Pagination/Pagination";
import SearchInput from "@/components/SearchInput/SearchInput";
import { useGetDigimons } from "@/hooks/useGetDigimons";
import { AllDigimon } from "@/types/AllDigimon";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { digimons, isError, isLoading } = useGetDigimons();
  const [filterDigimons, setFilterDigimons] = useState<AllDigimon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  function digimonsFilter(name: string) {
    currentPage == 1;
    setCurrentPage(1);
    setFilterDigimons(
      digimons?.filter((e: AllDigimon) =>
        e.name.toLowerCase().includes(name.trim().toLowerCase())
      ) ?? []
    );
  }
  //Total de Paginas
  const totalPages = Math.ceil(filterDigimons.length / 20);
  const onPageChange = (pageNumber: number) => {
    console.log("teste", pageNumber);
    setCurrentPage((_) => pageNumber);
  };
  useEffect(() => {
    if (!isLoading && digimons) {
      setFilterDigimons(digimons);
    }
  }, [isLoading, digimons]);
  
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
      <div className="flex flex-col text-center justify-center pb-5 items-center ">
        <div className="flex flex-col bg-black/70 w-fit p-2 rounded-lg gap-2 ring-2 ring-yellow-500/80">
          <h1 className="text-[20px] text-yellow-500/80 underline underline-offset-2 font-bold">
            Procure seu digimon aqui
          </h1>
          <SearchInput filterDigimon={digimonsFilter} />
        </div>
      </div>
      {digimons ? <DigimonList digimon={currentDigimons} /> : <p>Error</p>}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Page;
