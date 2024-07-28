import { DigiAll } from "@/types/DigiAll";

import axios from "axios";

const API_BASE = "https://digi-api.com/api/v1/digimon";

export const getAllDigimons = async (
  perPage: number = 20
): Promise<DigiAll[]> => {
  try {
    let allDigimons: DigiAll[] = [];
    let currentPage = 0;
    let totalPages = 1;

    while (currentPage < totalPages) {
      const res = await axios.get(
        `${API_BASE}?page=${currentPage}&size=${perPage}`
      );
      const data = res.data;
      allDigimons = allDigimons.concat(data.content);
      currentPage = data.pageable.currentPage + 1;
      totalPages = data.pageable.totalPages;
    }

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
