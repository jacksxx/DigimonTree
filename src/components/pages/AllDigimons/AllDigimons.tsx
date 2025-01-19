"use client";

import DigimonList from "@/components/pages/AllDigimons/DigimonList";
import Loading from "@/components/common/Loading/Loading";
import NoDataMessage from "@/components/common/NoData/NoDataMessage";
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";
import * as S from "./styles";
import { useGetAllLevels } from "@/services/levels/queires";
import { useGetAllAttributes } from "@/services/attibutes/queries";
import { useGetAllDigimons } from "@/services/digimons/queries";
import Filters from "./Filters/Filters";

const AllDigimons = () => {
  const [pagination, SetPagination] = useState<{
    page: number;
    pageSize: number;
  }>({ page: 0, pageSize: 20 });
  const [digimonName, setDigimonName] = useState<string>("");
  const [filters, setFilters] = useState<{
    attribute: string;
    level: string;
    xAntibody: boolean;
  }>({ attribute: "", level: "", xAntibody: false });

  const { digimons, isError, isLoading, pageable } = useGetAllDigimons({
    page: pagination.page,
    pageSize: pagination.pageSize,
    name: digimonName,
    attribute: filters.attribute,
    level: filters.level,
    xAntibody: filters.xAntibody,
  });
  const { levels } = useGetAllLevels();
  const { attributes } = useGetAllAttributes();

  const filterOptions: {
    key: keyof Omit<typeof filters, "xAntibody">;
    title: string;
    options: { label: string; value: string }[];
  }[] = [
    {
      key: "attribute",
      title: "Atributo",
      options: attributes.map((e) => ({ label: e.name, value: e.name })),
    },
    {
      key: "level",
      title: "Level",
      options: levels.map((e) => ({ label: e.name, value: e.name })),
    },
  ];

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
