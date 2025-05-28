"use client";

import type React from "react";
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "@/hooks/useDebounce";
import * as S from "./styles";
import { useSearchParams } from "next/navigation";

interface FiltersProps {
  filters: {
    digimonName: string;
    attribute: string;
    level: string;
    xAntibody: boolean;
  };
  setFilters: Dispatch<
    SetStateAction<{
      digimonName: string;
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
  setPagination: Dispatch<SetStateAction<{ page: number; pageSize: number }>>;
}
const Filters = ({
  filters,
  setFilters,
  filterOptions,
  setPagination,
}: FiltersProps) => {
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState<string>(filters.digimonName);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  useDebounce({
    value: inputValue,
    callback: (debouncedValue) => {
      if (debouncedValue.trim() !== filters.digimonName) {
        setFilters((prev) => ({
          ...prev,
          digimonName: debouncedValue.trim() || "",
        }));
      }
    },
  });

  useEffect(() => {
    const hasQueryParams = searchParams.toString().split("&").length > 1;
    if (hasQueryParams) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [searchParams]);

  const handleSeachName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setInputValue(name);
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
      digimonName: "",
      attribute: "",
      level: "",
      xAntibody: false,
    });
    setInputValue("");
    setIsFiltered(false);
    setPagination((prev) => ({ ...prev, page: 0 }));
    window.history.pushState({}, "", "");
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
              filters[
                filter.key as keyof Omit<
                  typeof filters,
                  "xAntibody" | "digimonName"
                >
              ] || ""
            }
            onChange={(e) => {
              const newValue = e.target.value;
              if (
                filters[
                  filter.key as keyof Omit<
                    typeof filters,
                    "xAntibody" | "digimonName"
                  >
                ] !== newValue
              ) {
                setFilters((prev) => ({
                  ...prev,
                  [filter.key]: newValue,
                }));
              }
              setIsFiltered(true);
              setPagination((prev) => ({ ...prev, page: 0 }));
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
            const checked = e.target.checked;
            if (filters.xAntibody !== checked) {
              setFilters((prev) => ({
                ...prev,
                xAntibody: checked,
              }));
            }
            if (
              filters.level === "" &&
              filters.attribute === "" &&
              inputValue === ""
            ) {
              setIsFiltered((prevState) => !prevState);
            } else setIsFiltered(true);
            setPagination((prev) => ({ ...prev, page: 0 }));
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

export function DigimonSearchSkeleton() {
  return (
    <S.WrapperSearch>
      <S.SearchConteiner>
        <S.SkeletonLabel />
        <S.SkeletonInput />
      </S.SearchConteiner>

      {[1, 2, 3].map((i) => (
        <S.Conteiner key={i} className="mx-5">
          <S.SkeletonLabel />
          <S.SkeletonSelect />
        </S.Conteiner>
      ))}

      <S.Conteiner>
        <S.SkeletonLabel />
        <S.SkeletonCheckbox />
      </S.Conteiner>

      <S.SkeletonButton className="mx-auto" />
    </S.WrapperSearch>
  );
}
