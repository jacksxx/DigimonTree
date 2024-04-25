import { AllDigimon } from "@/types/AllDigimon";
import { Digimon } from "@/types/Digimon";

import axios from "axios";

const API_BASE = "https://digi-api.com/api/v1/digimon";

// export const getAllDigimons = async (): Promise<AllDigimon[]> => {
//   try {
//     const res = await axios.get(API_BASE);
//     const data = res.data;
//     const digimons: AllDigimon[] = data.content;
//     return digimons;
//   } catch (error) {
//     throw new Error(`Erro ao buscar digimons: ${error}`);
//   }
// };

// export const getAllDigimons = async (): Promise<AllDigimon[]> => {
//   try {
//     let allDigimons: AllDigimon[] = [];
//     let currentPage = 0;
//     let totalPages = 1;

//     while (currentPage < totalPages) {
//       const res = await axios.get(`${API_BASE}?page=${currentPage}`);
//       const data = res.data;
//       allDigimons = allDigimons.concat(data.content);
//       currentPage = data.pageable.currentPage + 1;
//       totalPages = data.pageable.totalPages;
//     }

//     return allDigimons;
//   } catch (error) {
//     throw new Error(`Erro ao buscar digimons: ${error}`);
//   }
// };
export const getAllDigimons = async (
  perPage: number = 20
): Promise<AllDigimon[]> => {
  try {
    let allDigimons: AllDigimon[] = [];
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

export const getDigimonById = async (id: number): Promise<Digimon> => {
  try {
    const res = await axios.get(`${API_BASE}/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao buscar o digimon ${id}: ${error}`);
  }
};
