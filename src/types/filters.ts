/**
 * Tipos relacionados ao sistema de filtros genérico
 */

/**
 * Tipo de filtro suportado
 */
export type FilterType = "array" | "boolean" | "string" ;

/**
 * Configuração de um filtro individual
 */
export interface FilterConfig {
  /** Nome do parâmetro na URL */
  paramName: string;
  /** Nome do estado de UI */
  uiStateName: string;
  /** Tipo do filtro - "array" para arrays de números (padrão), "boolean" para booleanos, "string" para strings */
  type?: FilterType;
  /** Nome da função toggle/set - opcional, será gerado automaticamente se não fornecido */
  toggleFunctionName?: string;
  /** Valor inicial do estado de UI (se o filtro começa aberto) */
  initialOpen?: boolean ;
}

/**
 * Configuração completa dos filtros
 */
export interface FiltersConfig {
  /** Lista de filtros a serem gerenciados */
  filters: FilterConfig[];
  /** Nome do parâmetro de página na URL (padrão: "page") */
  pageParamName?: string;
}

/**
 * Tipo para os valores selecionados de cada filtro
 * Pode ser array de números, boolean, string ou undefined
 */
export type SelectedFilters = Record<string, number[] | boolean | string | undefined>;

/**
 * Tipo para os estados de UI de cada filtro
 */
export type FilterUIStates = Record<string, boolean>;

/**
 * Tipo para as funções toggle/set de cada filtro
 * Pode ser toggle para arrays (id: number) ou setter para boolean/string
 */
export type ToggleFunctions = Record<string, ((...args: any[]) => void)>;

/**
 * Tipo para os setters de estado de UI
 */
export type SetUIStateFunctions = Record<string, (value: boolean) => void>;

/**
 * Retorno do hook useFilters
 */
export interface UseFiltersReturn {
  /** Página atual */
  currentPage: number;
  /** Valores selecionados de cada filtro */
  selectedFilters: SelectedFilters;
  /** Estados de UI de cada filtro (aberto/fechado) */
  filterUIStates: FilterUIStates;
  /** Funções para alternar seleção de cada filtro */
  toggleFunctions: ToggleFunctions;
  /** Funções para definir estado de UI de cada filtro */
  setUIStateFunctions: SetUIStateFunctions;
  /** Função para definir a página */
  setPage: (page: number) => void;
  /** Função para limpar todos os filtros */
  clearFilters: () => void;
  /** Indica se há filtros ativos */
  hasActiveFilters: boolean;
  /** Função para atualizar múltiplos parâmetros de uma vez */
  updateSearchParams: (updates: {
    page?: number;
    [key: string]: number[] | number | boolean | string | null | undefined;
  }) => void;
}

