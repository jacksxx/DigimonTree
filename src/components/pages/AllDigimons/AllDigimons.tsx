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
    digimons,
    filterOptions,
    isError,
    isLoading,
    pageable,
    states,
    dispatch,
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
          filters={states.filters}
          setFilters={(filters) =>
            dispatch({ type: "SET_FILTERS", payload: filters })
          }
          setPagination={(pagination) =>
            dispatch({ type: "SET_PAGINATION", payload: pagination })
          }
        />
      </S.ContainerSearch>
      {digimons ? <DigimonList digimons={digimons} /> : <NoDataMessage />}
      <Pagination
        pagination={states.pagination}
        setPagination={(pagination) =>
          dispatch({ type: "SET_PAGINATION", payload: pagination })
        }
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
