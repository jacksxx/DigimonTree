// interface iPagination {
//     page: number;
//     pageSize: number;
//   }

import { useGetAllAttributes } from "@/services/attibutes/queries";
import { useGetAllDigimons } from "@/services/digimons/queries";
import { useGetAllLevels } from "@/services/levels/queires";
import { useState } from "react";

//   interface iFilters {
//     attribute: string;
//     level: string;
//     xAntibody: boolean;
//   }

//   interface State {
//     pagination: iPagination;
//     digimonName: string;
//     filters: iFilters;
//   }

//   type Action =
//     | { type: "SET_PAGINATION"; payload: SetStateAction<iPagination> }
//     | { type: "SET_DIGIMON_NAME"; payload: SetStateAction<string> }
//     | { type: "SET_FILTERS"; payload: SetStateAction<iFilters> };

//   const initialState: State = {
//     pagination: { page: 0, pageSize: 20 },
//     digimonName: "",
//     filters: { attribute: "", level: "", xAntibody: false },
//   };

//   function reducer(state: State, action: Action): State {
//     switch (action.type) {
//       case "SET_PAGINATION":
//         return {
//           ...state,
//           pagination:
//             typeof action.payload === "function"
//               ? action.payload(state.pagination)
//               : action.payload,
//         };
//       case "SET_DIGIMON_NAME":
//         return {
//           ...state,
//           digimonName:
//             typeof action.payload === "function"
//               ? action.payload(state.digimonName)
//               : action.payload,
//         };
//       case "SET_FILTERS":
//         return {
//           ...state,
//           filters:
//             typeof action.payload === "function"
//               ? action.payload(state.filters)
//               : action.payload,
//         };
//       default:
//         return state;
//     }
//   }

//   function UseAllDigimonHandle(dispatch: Dispatch<Action>) {
//     const HandlePagination = useCallback(
//       (pagination: SetStateAction<iPagination>) => {
//         dispatch({ type: "SET_PAGINATION", payload: pagination });
//       },
//       [dispatch]
//     );
//     const HandleDigimonName = useCallback(
//       (name: SetStateAction<string>) => {
//         dispatch({ type: "SET_DIGIMON_NAME", payload: name });
//       },
//       [dispatch]
//     );
//     const HandleFilters = useCallback(
//       (filters: SetStateAction<iFilters>) => {
//         dispatch({ type: "SET_FILTERS", payload: filters });
//       },
//       [dispatch]
//     );

//     return {
//       HandlePagination,
//       HandleDigimonName,
//       HandleFilters,
//     };
//   }
export function UseAllDigimons() {
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
  return {
    SetPagination,
    digimonName,
    digimons,
    filterOptions,
    filters,
    isError,
    isLoading,
    pageable,
    pagination,
    setDigimonName,
    setFilters,
  };
}
