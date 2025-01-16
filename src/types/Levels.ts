export type LevelsPages = {
  content: {
    fields: { id: number; name: string; href: string }[];
  };
  pageable: {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    previousPage: string;
    nextPage: string;
  };
};
