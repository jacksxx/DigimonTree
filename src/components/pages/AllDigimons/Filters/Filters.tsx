"use client";
import type React from "react";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import * as S from "./styles";

interface FiltersProps {
  search: { digimonName: string; setDigimonName: (name: string) => void };
  filters: {
    attribute: string;
    level: string;
    xAntibody: boolean;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      attribute: string;
      level: string;
      xAntibody: boolean;
    }>
  >;
  filterOptions: {
    key: string;
    title: string;
    options: { label: string; value: string }[];
  }[];
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; pageSize: number }>
  >;
}
const Filters = ({
  filters,
  search,
  setFilters,
  filterOptions,
  setPagination,
}: FiltersProps) => {
  const [inputValue, setInputValue] = useState<string>(search.digimonName);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  useDebounce({
    value: inputValue,
    callback: (debouncedValue) => {
      if (debouncedValue.trim() === "") {
        search.setDigimonName("");
      } else {
        search.setDigimonName(debouncedValue);
      }
    },
  });

  const handleSeachName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setPagination((prev) => ({ ...prev, page: 0 }));
    if (
      filters.attribute === "" &&
      filters.level === "" &&
      !filters.xAntibody &&
      event.target.value === ""
    ) {
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
  };
  const handleResetFilters = () => {
    setFilters({
      attribute: "",
      level: "",
      xAntibody: false,
    });
    setInputValue("");
    search.setDigimonName("");
    setIsFiltered(false);
    setPagination((prev) => ({ ...prev, page: 0 }));
  };
  return (
    <S.WrapperSearch>
      <S.SearchConteiner>
        <S.LabelSearch>Procure seu digimon aqui</S.LabelSearch>
        <S.Input
          placeholder="Exemplo: Dukemon"
          value={inputValue}
          onChange={handleSeachName}
        />
      </S.SearchConteiner>
      {filterOptions.map((filter) => (
        <S.Conteiner key={filter.key} className="mx-5">
          <S.LabelFilters>{filter.title}</S.LabelFilters>
          <S.Select
            name={filter.key}
            id={filter.key}
            value={
              filters[filter.key as keyof Omit<typeof filters, "xAntibody">] ||
              ""
            }
            onChange={(e) => {
              setFilters((prev) => ({
                ...prev,
                [filter.key]: e.target.value,
              }));
              setIsFiltered(true);
            }}
          >
            <S.Options value="">Selecione uma opção</S.Options>
            {filter.options.map((e) => (
              <S.Options key={e.value} value={e.value}>
                {e.label}
              </S.Options>
            ))}
          </S.Select>
        </S.Conteiner>
      ))}
      <S.Conteiner>
        <S.LabelFilters>Tem xAntibody?</S.LabelFilters>
        <S.CheckedInput
          type="checkbox"
          checked={filters.xAntibody}
          onChange={(e) => {
            setFilters((prev) => ({
              ...prev,
              xAntibody: e.target.checked,
            }));
            if (
              filters.level === "" &&
              filters.attribute === "" &&
              inputValue === ""
            ) {
              setIsFiltered((prevState) => !prevState);
            } else setIsFiltered(true);
          }}
        />
      </S.Conteiner>
      {isFiltered && (
        <S.ResetButton
          type="button"
          onClick={handleResetFilters}
          className="mx-auto"
        >
          Resetar Filtros
        </S.ResetButton>
      )}
    </S.WrapperSearch>
  );
};

export default Filters;
