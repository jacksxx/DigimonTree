import type { AttributesPages } from "@/types/Attributes";
import { api, apiRotas } from "../api";
import { useSuspenseQuery } from "@tanstack/react-query";

async function getAllAttributes(): Promise<
  AttributesPages["content"]["fields"]
> {
  try {
    let allFields: AttributesPages["content"]["fields"] = [];
    let currentPage = 0;
    let totalPages: number;

    do {
      const response = await api.get<AttributesPages>(
        `${apiRotas.attribute}?page=${currentPage}`
      );

      const { fields } = response.data.content;
      const { totalPages: fetchedTotalPages } = response.data.pageable;

      allFields = [...allFields, ...fields];
      totalPages = fetchedTotalPages;

      currentPage++;
    } while (currentPage < totalPages + 1);

    return allFields;
  } catch (error) {
    throw new Error(`Error ao buscar todos os Attributes: ${error}`);
  }
}

export function useGetAllAttributes() {
  const { data, isFetching: isLoading } = useSuspenseQuery({
    queryKey: ["allAttributes"],
    queryFn: () => getAllAttributes(),
  });

  return {
    attributes: data || [],
    isLoading,
  };
}
