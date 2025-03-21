"use client";

import DigimonList from "@/components/pages/AllDigimons/DigimonList";
import Loading from "@/components/common/Loading/Loading";
import NoDataMessage from "@/components/common/NoData/NoDataMessage";
import Pagination from "@/components/Pagination/Pagination";
import * as S from "./styles";
import Filters from "./Filters/Filters";
import { UseAllDigimons } from "@/hooks/useAllDigimons";

const AllDigimons = () => {
  const {
    SetPagination,
    digimonName,
    digimons,
    filterOptions,
    filters,
    isError,
    isLoading,
    pageable,
    pagination,
    setDigimonName,
    setFilters,
  } = UseAllDigimons();
  
  if (isLoading) {
    return <Loading message="Carregando digimons" />;
  }
  if (isError || !digimons) {
    return <NoDataMessage />;
  }
  return (
    <section>
      <S.ContainerSearch>
        <Filters
          filterOptions={filterOptions}
          filters={filters}
          search={{ digimonName, setDigimonName }}
          setFilters={setFilters}
          setPagination={SetPagination}
        />
      </S.ContainerSearch>
      {digimons ? <DigimonList digimons={digimons} /> : <NoDataMessage />}
      <Pagination
        pagination={pagination}
        setPagination={SetPagination}
        totalPages={
          pageable.totalPages > 1
            ? pageable.totalPages + 1
            : pageable.totalPages
        }
      />
    </section>
  );
};

export default AllDigimons;
