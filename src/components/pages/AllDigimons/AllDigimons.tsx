"use client";

import DigimonList from "@/components/pages/AllDigimons/DigimonList";
import NoDataMessage from "@/components/common/NoData/NoDataMessage";
import Pagination from "@/components/Pagination/Pagination";
import * as S from "./styles";
import Filters, { DigimonSearchSkeleton } from "./Filters/Filters";
import { UseAllDigimons } from "@/hooks/useAllDigimons";
import { Suspense } from "react";

const AllDigimons = () => {
  const { digimons, filterOptions, pageable, states, dispatch } =
    UseAllDigimons();

  return (
    <section>
      <S.ContainerSearch>
        <Suspense fallback={<DigimonSearchSkeleton />}>
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
        </Suspense>
      </S.ContainerSearch>

      {digimons ? (
        <DigimonList
          digimons={digimons}
          pageSize={states.pagination.pageSize}
        />
      ) : (
        <NoDataMessage />
      )}

      <Pagination
        pagination={states.pagination}
        setPagination={(pagination) =>
          dispatch({ type: "SET_PAGINATION", payload: pagination })
        }
        totalPages={Number(pageable?.totalPages ?? 0)}
      />
    </section>
  );
};

export default AllDigimons;
