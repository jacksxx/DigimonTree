import { getAllDigimons, getDigimonById } from "@/services/DigimonService";
import { DigiAll } from "@/types/DigiAll";
import { useQuery } from "@tanstack/react-query";

export const useGetDigimons = () => {
  const {
    data: digimons,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["digimons"],
    queryFn: () => getAllDigimons(20),
  });

  return { digimons, isError, isLoading };
};

export const useGetDigimonById = (id: number) => {
  const {
    data: digimon,
    isError,
    isLoading,
    refetch,
  } = useQuery<DigiAll>({
    queryKey: ["digimon"],
    queryFn: () => getDigimonById(id),
  });
  return { digimon, isError, isLoading, refetch };
};
