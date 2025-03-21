import { useGetAllAttributes } from "@/services/attibutes/queries";
import { useGetAllDigimons } from "@/services/digimons/queries";
import { useGetAllLevels } from "@/services/levels/queires";
import { type SetStateAction, useReducer } from "react";

interface iPagination {
  page: number;
  pageSize: number;
}

interface iFilters {
  digimonName: string;
  attribute: string;
  level: string;
  xAntibody: boolean;
}

interface State {
  pagination: iPagination;
  filters: iFilters;
}

type Action =
  | { type: "SET_PAGINATION"; payload: SetStateAction<iPagination> }
  | { type: "SET_FILTERS"; payload: SetStateAction<iFilters> };

const initialState: State = {
  pagination: { page: 0, pageSize: 20 },
  filters: { digimonName: "", attribute: "", level: "", xAntibody: false },
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PAGINATION":
      return {
        ...state,
        pagination:
          typeof action.payload === "function"
            ? action.payload(state.pagination)
            : action.payload,
      };
    case "SET_FILTERS":
      return {
        ...state,
        filters:
          typeof action.payload === "function"
            ? action.payload(state.filters)
            : action.payload,
      };
    default:
      return state;
  }
}

export function UseAllDigimons() {
  
  const [states, dispatch] = useReducer(reducer, initialState);
 
  const { digimons, isError, isLoading, pageable } = useGetAllDigimons({
    page: states.pagination.page,
    pageSize: states.pagination.pageSize,
    name: states.filters.digimonName,
    attribute: states.filters.attribute,
    level: states.filters.level,
    xAntibody: states.filters.xAntibody,
  });
  const { levels } = useGetAllLevels();
  const { attributes } = useGetAllAttributes();
  const filterOptions: {
    key: keyof Omit<typeof states.filters, "xAntibody">;
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
    states,
    digimons,
    filterOptions,
    isError,
    isLoading,
    pageable,
    dispatch,
  };
}
