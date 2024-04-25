export type Digimon = {
  id: number;
  name: string;  
  xAntibody: boolean;
  levels: Level[];
  images: Image[];
  types: Type[];
  attributes: Attribute[];
  fields: Field[];
  priorEvolutions: Evolution[];
  nextEvolutions: Evolution[];
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
