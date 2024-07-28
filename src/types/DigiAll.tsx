export type DigiAll = {
  id: number;
  name: string;
  image: string;
  href: string;
  xAntibody: boolean;
  levels: Level[];
  images: Image[];
  types: Type[];
  attributes: Attribute[];
  fields: Field[];
  priorEvolutions: Evolution[];
  nextEvolutions: Evolution[];
  descriptions: Descriptions[];
  currentPage: number;
  elementsOnPage: number;
  totalElements: number;
  totalPages: number;
  previousPage: number;
  nextPage: number;
  skills: Skills[];
};

export type Level = {
  id: number;
  level: string;
};

export type Image = {
  href: string;
  transparent: boolean;
};

export type Type = {
  id: number;
  type: string;
};

export type Attribute = {
  id: number;
  attribute: string;
};

export type Field = {
  id: number;
  field: string;
  image: string;
};

export type Evolution = {
  id: number;
  digimon: string;
  condition: string;
  image: string;
  url: string;
};
export type Descriptions = {
  origin: string;
  language: string;
  description: string;
};
export type Skills = {
  id: string;
  skill: string;
  translation: string;
  description: string;
};
