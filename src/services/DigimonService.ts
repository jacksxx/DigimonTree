import { DigiAll } from "@/types/DigiAll";

import axios from "axios";

const API_BASE = "https://digi-api.com/api/v1/digimon";

export const getAllDigimons = async (
  perPage: number = 20
): Promise<DigiAll[]> => {
  try {
    // Primeira chamada para obter a quantidade total de páginas
    const initialRes = await axios.get(`${API_BASE}?page=0&size=${perPage}`);
    const initialData = initialRes.data;
    const totalPages = initialData.pageable.totalPages;

    // Cria uma array de Promises para todas as páginas
    const requests = [];
    for (let i = 0; i < totalPages; i++) {
      requests.push(axios.get(`${API_BASE}?page=${i}&size=${perPage}`));
    }

    // Executa todas as requisições em paralelo
    const responses = await Promise.all(requests);

    // Extrai e concatena os dados de todas as respostas
    const allDigimons = responses.flatMap((res) => res.data.content);

    return allDigimons;
  } catch (error) {
    throw new Error(`Erro ao buscar digimons: ${error}`);
  }
};

export const getDigimonById = async (id: number): Promise<DigiAll> => {
  try {
    const res = await axios.get(`${API_BASE}/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao buscar o digimon ${id}: ${error}`);
  }
};
