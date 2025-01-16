import axios, { type AxiosRequestConfig } from "axios";

export const apiRotas = {
  digimons: "/digimon",
  attribute: "/attribute",
  level: "level",
};

const apiInstance = axios.create({
  baseURL: "https://digi-api.com/api/v1/",
});

export const api = {
  get: <T>(url: string, config: AxiosRequestConfig = {}) =>
    apiInstance.get<T>(url, config),
};
