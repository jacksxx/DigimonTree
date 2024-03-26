import { getAllDigimons, getDigimonById } from "@/services/DigimonService";
import { Digimon } from "@/types/Digimon";
import { useQuery } from "@tanstack/react-query";

export const useGetDigimons = () => {
  const {
    data: digimons,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["digimons"],
    queryFn: getAllDigimons,
    refetchOnWindowFocus: true,
  });

  return { digimons, isError, isLoading };
};

export const useGetDigimonById = (id: number) => {
  const {
    data: digimon,
    isError,
    isLoading,
    refetch,
  } = useQuery<Digimon>({
    queryKey: ["digimon"],
    queryFn: () => getDigimonById(id),
    refetchOnWindowFocus: true,
  });
  return { digimon, isError, isLoading, refetch };
};
