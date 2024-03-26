import { Digimon } from "@/types/Digimon";
import axios from "axios";

const API_BASE = "https://digi-api.com/api/v1/digimon";

export const getAllDigimons = async (): Promise<Digimon[]> => {
  try {
    const res = await axios.get(API_BASE);
    const data = res.data;
    const digimons: Digimon[] = data.content;
    return digimons;
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
