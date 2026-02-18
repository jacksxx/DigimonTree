"use client";

import DigimonList, {
  DigimonListSkeleton,
} from "@/components/pages/AllDigimons/DigimonList";
import NoDataMessage from "@/components/common/NoData/NoDataMessage";
import Pagination from "@/components/Pagination/Pagination";
import * as S from "./styles";
import Filters, { DigimonSearchSkeleton } from "./Filters/Filters";
import { UseAllDigimons } from "@/hooks/useAllDigimons";
import { Suspense } from "react";

const AllDigimons = () => {
  const {
    digimons,
    filterOptions,
    pageable,
    currentPage,
    selectedDigimonName,
    selectedAttribute,
    selectedLevel,
    selectedXAntibody,
    setDigimonName,
    toggleAttribute,
    toggleLevel,
    setXAntibody,
    setPage,
    clearFilters,
    hasActiveFilters,
  } = UseAllDigimons();

  return (
    <section>
      <S.ContainerSearch>
        <Suspense fallback={<DigimonSearchSkeleton />}>
          <Filters
            filterOptions={filterOptions}
            selectedDigimonName={selectedDigimonName}
            selectedAttribute={selectedAttribute}
            selectedLevel={selectedLevel}
            selectedXAntibody={selectedXAntibody}
            onDigimonNameChange={setDigimonName}
            onAttributeChange={toggleAttribute}
            onLevelChange={toggleLevel}
            onXAntibodyChange={setXAntibody}
            onPageChange={setPage}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </Suspense>
      </S.ContainerSearch>

      {digimons ? (
        <Suspense fallback={<DigimonListSkeleton count={20} />}>
          <DigimonList digimons={digimons} />
        </Suspense>
      ) : (
        <NoDataMessage />
      )}

      <Pagination
        currentPage={currentPage}
        onPageChange={setPage}
        totalPages={Number(pageable?.totalPages ?? 0)}
      />
    </section>
  );
};

export default AllDigimons;
