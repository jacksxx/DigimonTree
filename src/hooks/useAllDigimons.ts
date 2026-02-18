import { useMemo } from "react";
import { useGetAllAttributes } from "@/services/attibutes/queries";
import { useGetAllDigimons } from "@/services/digimons/queries";
import { useGetAllLevels } from "@/services/levels/queires";
import { useFilters } from "./useFilters";
import type { FiltersConfig } from "@/types/filters";

const ITEMS_PER_PAGE = 20;

export function UseAllDigimons() {
  // Configuração dos filtros
  const filtersConfig: FiltersConfig = {
    filters: [
      {
        paramName: "attribute",
        uiStateName: "isAttributeOpen",
        toggleFunctionName: "toggleAttribute",
        initialOpen: true,
        type: "string",
      },
      {
        paramName: "level",
        uiStateName: "isLevelOpen",
        toggleFunctionName: "toggleLevel",
        initialOpen: true,
        type: "string",
      },
      {
        paramName: "digimonName",
        uiStateName: "isDigimonNameOpen",
        toggleFunctionName: "setDigimonName",
        initialOpen: false,
        type: "string",
      },
      {
        paramName: "xAntibody",
        uiStateName: "isXAntibodyOpen",
        toggleFunctionName: "setXAntibody",
        initialOpen: true,
        type: "boolean",
      },
    ],
  };

  // Usa o hook genérico
  const {
    currentPage,
    selectedFilters,
    filterUIStates,
    toggleFunctions,
    setUIStateFunctions,
    setPage,
    clearFilters,
    hasActiveFilters,
  } = useFilters(filtersConfig);

  // Extrai valores específicos (para facilitar o uso)
  const selectedAttribute = (selectedFilters.attribute as string) || "";
  const selectedLevel = (selectedFilters.level as string) || "";
  const selectedDigimonName = (selectedFilters.digimonName as string) || "";
  const selectedXAntibody = (selectedFilters.xAntibody as boolean) || false;

  const isAttributeOpen = filterUIStates.isAttributeOpen;
  const isLevelOpen = filterUIStates.isLevelOpen;
  const isDigimonNameOpen = filterUIStates.isDigimonNameOpen;
  const isXAntibodyOpen = filterUIStates.isXAntibodyOpen;

  const toggleAttribute = toggleFunctions.toggleAttribute;
  const toggleLevel = toggleFunctions.toggleLevel;
  const setDigimonName = toggleFunctions.setDigimonName;
  const setXAntibody = toggleFunctions.setXAntibody;

  const setIsAttributeOpen = setUIStateFunctions.setIsAttributeOpen;
  const setIsLevelOpen = setUIStateFunctions.setIsLevelOpen;
  const setIsDigimonNameOpen = setUIStateFunctions.setIsDigimonNameOpen;
  const setIsXAntibodyOpen = setUIStateFunctions.setIsXAntibodyOpen;

  // Busca dados das APIs
  const { levels } = useGetAllLevels();
  const { attributes } = useGetAllAttributes();

  // Prepara os query params para a API de digimons
  const queryParams = useMemo(
    () => ({
      page: currentPage - 1, // API usa 0-based indexing
      pageSize: ITEMS_PER_PAGE,
      name: selectedDigimonName.trim() || undefined,
      attribute: selectedAttribute || undefined,
      level: selectedLevel || undefined,
      xAntibody: selectedXAntibody || undefined,
    }),
    [currentPage, selectedDigimonName, selectedAttribute, selectedLevel, selectedXAntibody]
  );

  const { digimons, isError, isLoading, pageable } = useGetAllDigimons(queryParams);

  const filterOptions: {
    key: "attribute" | "level";
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

  return {
    // Dados dos digimons
    digimons,
    isError,
    isLoading,
    pageable,

    // Filtros e paginação
    currentPage,
    selectedDigimonName,
    selectedAttribute,
    selectedLevel,
    selectedXAntibody,
    hasActiveFilters,

    // UI states
    isAttributeOpen,
    isLevelOpen,
    isDigimonNameOpen,
    isXAntibodyOpen,

    // Funções para alterar filtros
    setDigimonName,
    toggleAttribute,
    toggleLevel,
    setXAntibody,

    // Funções para estados de UI
    setIsAttributeOpen,
    setIsLevelOpen,
    setIsDigimonNameOpen,
    setIsXAntibodyOpen,

    // Funções utilitárias
    setPage,
    clearFilters,

    // Opções para os filtros
    filterOptions,
  };
}
