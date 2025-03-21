import { useGetAllAttributes } from "@/services/attibutes/queries";
import { useGetAllDigimons } from "@/services/digimons/queries";
import { useGetAllLevels } from "@/services/levels/queires";
import { type SetStateAction, useEffect, useReducer } from "react";

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

export const getQueryParam = (
  param: string,
  defaultValue: string | boolean
): string => {
  if (typeof window === "undefined") {
    return String(defaultValue);
  }

  const searchParams = window.location.search;

  if (!searchParams) return String(defaultValue);

  const queryParam = new URLSearchParams(searchParams).get(param);

  if (queryParam === null) return String(defaultValue);

  if (param === "xAntibody") {
    return queryParam === "true" ? "true" : "false";
  }

  return queryParam;
};

const initialState: State = {
  pagination: {
    page: Number(getQueryParam("page", "0")),
    pageSize: Number(getQueryParam("pageSize", "20")),
  },
  filters: {
    digimonName: getQueryParam("digimonName", ""),
    attribute: getQueryParam("attribute", ""),
    level: getQueryParam("level", ""),
    xAntibody: getQueryParam("xAntibody", false) === "true",
  },
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

  useEffect(() => {
    const query = new URLSearchParams();

    query.set("page", String(states.pagination.page));

    if (states.filters.digimonName.trim()) {
      query.set("digimonName", states.filters.digimonName);
    }
    if (states.filters.attribute) {
      query.set("attribute", states.filters.attribute);
    }
    if (states.filters.level) {
      query.set("level", states.filters.level);
    }
    if (states.filters.xAntibody) {
      query.set("xAntibody", String(states.filters.xAntibody));
    }
    const newUrl = `/digimons?${query.toString()}`;
    window.history.pushState({}, "", newUrl);
  }, [states]);

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
