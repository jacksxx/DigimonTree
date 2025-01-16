export type DigimonPages = {
  content: {
    id: number;
    name: string;
    href: string;
    image: string;
  }[];
  pageable: {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    previousPage: string;
    nextPage: string;
  };
};
