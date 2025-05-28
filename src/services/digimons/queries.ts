import type { Digimon } from "@/types/Digimon";
import type { DigimonPages } from "@/types/DigimonPage";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { api, apiRotas } from "../api";

type Params = {
  page: number;
  pageSize: number;
  name?: string;
  attribute?: string;
  xAntibody?: boolean;
  level?: string;
};
/**
 * @title Construtor de URLS
 * @description Server pra contruir urls de forma rapida e pratica *
 * @returns
 */
function constructURL(params: Params) {
  const url = new URLSearchParams();
  url.append("pageSize", params.pageSize.toString());
  url.append("page", params.page.toString());

  if (params.name) url.append("name", params.name);
  if (params.attribute) url.append("attribute", params.attribute);
  if (params.xAntibody) url.append("xAntibody", params.xAntibody.toString());
  if (params.level) url.append("level", params.level);

  return url.toString();
}

export async function getDigimons(params: Params): Promise<DigimonPages> {
  try {
    const url = constructURL(params);
    const response = await api.get<DigimonPages>(`${apiRotas.digimons}?${url}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error ao buscar Digimons: ${error}`);
  }
}

export function useGetAllDigimons(params: Params) {
  const {
    data,
    isFetching: isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: ["allDigimons", params],
    queryFn: () => getDigimons(params),
    select: (data) => ({
      digimons: data.content,
      pageable: data.pageable,
    }),
  });

  return {
    digimons: data?.digimons || [],
    pageable: data?.pageable || undefined,
    isError,
    isLoading,
  };
}

async function getDigimonById(name: string): Promise<Digimon> {
  try {
    const response = await api.get<Digimon>(`${apiRotas.digimons}/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error ao buscar Digimon: ${error}`);
  }
}

export function useGetDigimonById(name: string) {
  const { data, isFetching: isLoading } = useSuspenseQuery({
    queryKey: ["digimonId", name],
    queryFn: () => getDigimonById(name),
  });

  return {
    digimon: data,
    isLoading,
  };
}
