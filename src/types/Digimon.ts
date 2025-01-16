export type DigiImage = {
  href: string;
  transparent: boolean;
};

export type DigiLevel = {
  id: number;
  level: string;
};

export type DigiType = {
  id: number;
  type: string;
};

export type DigiAttribute = {
  id: number;
  attribute: string;
};

export type DigiField = {
  id: number;
  field: string;
  image: string;
};

export type DigiDescription = {
  origin: string;
  language: string;
  description: string;
};

export type DigiSkill = {
  id: number;
  skill: string;
  translation: string;
  description: string;
};

export type DigiEvolution = {
  id: number;
  digimon: string;
  condition: string;
  image: string;
  url: string;
};

export type Digimon = {
  id: number;
  name: string;
  xAntibody: boolean;
  images: DigiImage[];
  levels: DigiLevel[];
  types: DigiType[];
  attributes: DigiAttribute[];
  fields: DigiField[];
  releaseDate: string;
  descriptions: DigiDescription[];
  skills: DigiSkill[];
  priorEvolutions: DigiEvolution[];
  nextEvolutions: DigiEvolution[];
};
