import axios from "axios";

export const getAllDigimons = async () => {
  try {
    const res = await axios.get("digi-api.com/api/v1/digimon");
    console.log(res)
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao buscar produtos`);
  }
};

export const getDigimonByName = async (name: string) => {
  try {
    const res = await axios.get(`digi-api.com/api/v1/digimon/${name}`);
    return res.data;
  } catch (error) {
    throw new Error(`Erro ao buscar produtos`);
  }
};
