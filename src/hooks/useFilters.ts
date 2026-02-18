import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useQueryStates, parseAsArrayOf, parseAsInteger, parseAsBoolean, parseAsString } from "nuqs";
import type {
  FiltersConfig,
  SelectedFilters,
  FilterUIStates,
  ToggleFunctions,
  SetUIStateFunctions,
  UseFiltersReturn,
} from "@/types/filters";

/**
 * Hook genérico para gerenciar filtros e paginação usando URL params com nuqs
 * 
 * @param config - Configuração dos filtros a serem gerenciados
 * @returns Objeto com estados, funções e valores dos filtros
 * 
 * @example
 * ```ts
 * const filtersConfig: FiltersConfig = {
 *   filters: [
 *     { paramName: "tamanhos", uiStateName: "isTamanhosOpen", initialOpen: true },
 *     { paramName: "materiais", uiStateName: "isMateriaisOpen", initialOpen: true },
 *     { paramName: "categorias", uiStateName: "isCategoriasOpen", initialOpen: true },
 *   ],
 * };
 * 
 * const {
 *   currentPage,
 *   selectedFilters,
 *   filterUIStates,
 *   toggleFunctions,
 *   setUIStateFunctions,
 *   setPage,
 *   clearFilters,
 *   hasActiveFilters,
 * } = useFilters(filtersConfig);
 * 
 * // Usar os filtros
 * const selectedTamanhos = selectedFilters.tamanhos || [];
 * const isTamanhosOpen = filterUIStates.isTamanhosOpen;
 * const toggleTamanho = toggleFunctions.toggleTamanho;
 * const setIsTamanhosOpen = setUIStateFunctions.setIsTamanhosOpen;
 * ```
 */
export function useFilters(
  config: FiltersConfig
): UseFiltersReturn {
  const pageParamName = config.pageParamName || "page";

  // Cria parsers dinamicamente baseado na configuração
  const parsers = useMemo(() => {
    const parsersObj: Record<string, any> = {
      [pageParamName]: parseAsInteger.withDefault(1),
    };

    config.filters.forEach((filter) => {
      const filterType = filter.type || "array"; // Padrão é array para compatibilidade
      
      switch (filterType) {
        case "boolean":
          parsersObj[filter.paramName] = parseAsBoolean;
          break;
        case "string":
          parsersObj[filter.paramName] = parseAsString.withDefault("");
          break;
        case "array":
        default:
          parsersObj[filter.paramName] = parseAsArrayOf(parseAsInteger).withDefault([]);
          break;
      }
    });

    return parsersObj;
  }, [config.filters, pageParamName]);

  // Hook do nuqs gerencia tudo automaticamente com type-safety
  const [params, setParams] = useQueryStates(parsers);

  // Inicializa estados de UI para cada filtro
  const initialUIStates = useMemo(() => {
    const states: FilterUIStates = {};
    config.filters.forEach((filter) => {
      states[filter.uiStateName] = filter.initialOpen ?? true;
    });
    return states;
  }, [config.filters]);

  const [filterUIStates, setFilterUIStates] =
    useState<FilterUIStates>(initialUIStates);

  // Valores já vêm tipados e parseados do nuqs!
  // Com withDefault(1), sempre retorna número, mas garantimos com fallback
  const currentPage = (params[pageParamName] as number | null) ?? 1;

  // Extrai valores selecionados de cada filtro (tipos variam conforme o tipo do filtro)
  const selectedFilters = useMemo(() => {
    const filters: SelectedFilters = {};
    config.filters.forEach((filter) => {
      const filterType = filter.type || "array";
      const paramValue = params[filter.paramName];
      
      switch (filterType) {
        case "boolean":
          filters[filter.paramName] = paramValue as boolean | undefined;
          break;
        case "string":
          filters[filter.paramName] = (paramValue as string) || "";
          break;
        case "array":
        default:
          filters[filter.paramName] = (paramValue as number[]) || [];
          break;
      }
    });
    return filters;
  }, [config.filters, params]);

  // Função genérica para atualizar os parâmetros da URL (nuqs faz o trabalho pesado)
  const updateSearchParams = useCallback(
    (updates: {
      page?: number;
      [key: string]: number[] | number | boolean | string | null | undefined;
    }) => {
      const updateObj: Record<string, number[] | number | boolean | string | null> = {};

      // Atualiza página (nuqs usa null para remover valores)
      if (updates.page !== undefined) {
        updateObj[pageParamName] = updates.page === 1 ? null : updates.page;
      }

      // Atualiza cada filtro
      config.filters.forEach((filter) => {
        const value = updates[filter.paramName];
        if (value !== undefined) {
          const filterType = filter.type || "array";
          
          if (value === null) {
            // null remove da URL
            updateObj[filter.paramName] = null;
          } else if (filterType === "array" && Array.isArray(value)) {
            // Array vazio remove da URL
            updateObj[filter.paramName] = value.length === 0 ? null : value;
          } else if (filterType === "string" && typeof value === "string") {
            // String vazia remove da URL
            updateObj[filter.paramName] = value === "" ? null : value;
          } else {
            // Boolean ou outros valores
            updateObj[filter.paramName] = value as any;
          }
        }
      });

      setParams(updateObj as any);
    },
    [setParams, config.filters, pageParamName]
  );

  // Refs para armazenar timeouts de debounce para filtros string
  const debounceTimeoutsRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Limpa timeouts ao desmontar
  useEffect(() => {
    return () => {
      Object.values(debounceTimeoutsRef.current).forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  // Cria funções toggle/set para cada filtro
  const toggleFunctions = useMemo(() => {
    const functions: ToggleFunctions = {};
    config.filters.forEach((filter) => {
      const filterType = filter.type || "array";
      
      // Usa o nome customizado se fornecido, senão gera automaticamente
      const functionName =
        filter.toggleFunctionName ||
        (filterType === "array"
          ? `toggle${filter.paramName.charAt(0).toUpperCase()}${filter.paramName
              .slice(1)
              .replace(/s$/, "")}` // Remove 's' final para singular (tamanhos -> tamanho)
          : `set${filter.paramName.charAt(0).toUpperCase()}${filter.paramName.slice(1)}`);
      
      if (filterType === "array") {
        // Toggle para arrays de números
        functions[functionName] = ((id: number) => {
          const current = (params[filter.paramName] as number[]) || [];
          const newValues = current.includes(id)
            ? current.filter((itemId) => itemId !== id)
            : [...current, id];
          setParams({ 
            [filter.paramName]: newValues.length > 0 ? newValues : null,
            [pageParamName]: null // Reseta para página 1 (null remove da URL)
          } as any);
        }) as any;
      } else if (filterType === "boolean") {
        // Setter para booleanos
        functions[functionName] = ((value: boolean | null) => {
          setParams({ 
            [filter.paramName]: value,
            [pageParamName]: null // Reseta para página 1
          } as any);
        }) as any;
      } else if (filterType === "string") {
        // Setter para strings com debounce de 400ms
        functions[functionName] = ((value: string) => {
          // Limpa timeout anterior se existir
          if (debounceTimeoutsRef.current[filter.paramName]) {
            clearTimeout(debounceTimeoutsRef.current[filter.paramName]);
          }

          // Se o valor estiver vazio, atualiza imediatamente (sem debounce)
          if (value === "") {
            setParams({ 
              [filter.paramName]: null,
              [pageParamName]: null // Reseta para página 1
            } as any);
            return;
          }

          // Aplica debounce de 400ms para valores não vazios
          debounceTimeoutsRef.current[filter.paramName] = setTimeout(() => {
            setParams({ 
              [filter.paramName]: value,
              [pageParamName]: null // Reseta para página 1
            } as any);
            delete debounceTimeoutsRef.current[filter.paramName];
          }, 400);
        }) as any;
      }
    });
    return functions;
  }, [config.filters, params, setParams, pageParamName]);

  // Cria funções setter para estados de UI
  const setUIStateFunctions = useMemo(() => {
    const functions: SetUIStateFunctions = {};
    config.filters.forEach((filter) => {
      const functionName = `set${filter.uiStateName
        .charAt(0)
        .toUpperCase()}${filter.uiStateName.slice(1)}`;
      functions[functionName] = (value: boolean) => {
        setFilterUIStates((prev) => ({
          ...prev,
          [filter.uiStateName]: value,
        }));
      };
    });
    return functions;
  }, [config.filters]);

  // Função para definir a página
  const setPage = useCallback(
    (page: number) => {
      // nuqs usa null para remover valores da URL
      setParams({ [pageParamName]: page === 1 ? null : page } as any);
    },
    [setParams, pageParamName]
  );

  // Função para limpar todos os filtros
  const clearFilters = useCallback(() => {
    // Limpa todos os timeouts de debounce pendentes
    Object.values(debounceTimeoutsRef.current).forEach((timeout) => {
      clearTimeout(timeout);
    });
    debounceTimeoutsRef.current = {};

    const clearObj: Record<string, null> = {
      [pageParamName]: null, // Reseta página para 1 (null remove da URL, default é 1)
    };
    config.filters.forEach((filter) => {
      clearObj[filter.paramName] = null; // Remove filtro da URL
    });
    setParams(clearObj as any);
  }, [setParams, config.filters, pageParamName]);

  // Verifica se há filtros ativos
  const hasActiveFilters = useMemo(() => {
    return config.filters.some((filter) => {
      const filterType = filter.type || "array";
      const value = selectedFilters[filter.paramName];
      
      switch (filterType) {
        case "boolean":
          return value !== undefined && value !== null;
        case "string":
          return typeof value === "string" && value !== "" && value !== null;
        case "array":
        default:
          return Array.isArray(value) && value.length > 0;
      }
    });
  }, [config.filters, selectedFilters]);

  return {
    currentPage,
    selectedFilters,
    filterUIStates,
    toggleFunctions,
    setUIStateFunctions,
    setPage,
    clearFilters,
    hasActiveFilters,
    updateSearchParams,
  };
}

