"use client";

import type React from "react";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import * as S from "./styles";

interface FiltersProps {
  filterOptions: {
    key: string;
    title: string;
    options: { label: string; value: string }[];
  }[];
  selectedDigimonName: string;
  selectedAttribute: string;
  selectedLevel: string;
  selectedXAntibody: boolean;
  onDigimonNameChange: (value: string) => void;
  onAttributeChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onXAntibodyChange: (value: boolean | null) => void;
  onPageChange: (page: number) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const Filters = ({
  filterOptions,
  selectedDigimonName,
  selectedAttribute,
  selectedLevel,
  selectedXAntibody,
  onDigimonNameChange,
  onAttributeChange,
  onLevelChange,
  onXAntibodyChange,
  onPageChange,
  onClearFilters,
  hasActiveFilters,
}: FiltersProps) => {
  const [inputValue, setInputValue] = useState<string>(selectedDigimonName);

  useDebounce({
    value: inputValue,
    callback: (debouncedValue) => {
      if (debouncedValue.trim() !== selectedDigimonName) {
        onDigimonNameChange(debouncedValue.trim() || "");
      }
    },
  });

  const handleSeachName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setInputValue(name);
    onPageChange(1); // Reset to page 1 (nuqs expects 1-based indexing)
  };

  const handleResetFilters = () => {
    setInputValue("");
    onClearFilters(); // nuqs já cuida de atualizar a URL automaticamente
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
              filter.key === "attribute"
                ? selectedAttribute
                : filter.key === "level"
                  ? selectedLevel
                  : ""
            }
            onChange={(e) => {
              const newValue = e.target.value;
              if (filter.key === "attribute") {
                onAttributeChange(newValue);
              } else if (filter.key === "level") {
                onLevelChange(newValue);
              }
              onPageChange(1); // Reset to page 1
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
          checked={selectedXAntibody}
          onChange={(e) => {
            const checked = e.target.checked;
            onXAntibodyChange(checked ? true : null);
            onPageChange(1); // Reset to page 1
          }}
        />
      </S.Conteiner>
      {hasActiveFilters && (
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
