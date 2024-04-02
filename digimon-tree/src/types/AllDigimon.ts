export type AllDigimon = {
  id: number;
  name: string;
  image: string;
  href: string;
  currentPage: number;
  elementsOnPage: number;
  totalElements: number;
  totalPages: number;
  previousPage: number;
  nextPage: number;
};
const elementsOnPage = 20;