import type { LevelsPages } from "@/types/Levels";
import { api, apiRotas } from "../api";
import { useSuspenseQuery } from "@tanstack/react-query";

async function getAllLevels(): Promise<LevelsPages["content"]["fields"]> {
  try {
    let allFields: LevelsPages["content"]["fields"] = [];
    let currentPage = 0;
    let totalPages: number;

    do {
      const response = await api.get<LevelsPages>(
        `${apiRotas.level}?page=${currentPage}`
      );

      const { fields } = response.data.content;
      const { totalPages: fetchedTotalPages } = response.data.pageable;

      allFields = [...allFields, ...fields];
      totalPages = fetchedTotalPages;

      currentPage++;
    } while (currentPage < totalPages + 1);
    return allFields;
  } catch (error) {
    throw new Error(`Error ao buscar todos os Levels: ${error}`);
  }
}

export function useGetAllLevels() {
  const { data, isFetching: isLoading } = useSuspenseQuery({
    queryKey: ["allLevels"],
    queryFn: () => getAllLevels(),
  });

  return {
    levels: data || [],
    isLoading,
  };
}
