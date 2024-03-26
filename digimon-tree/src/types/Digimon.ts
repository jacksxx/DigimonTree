export type Digimon = {
  id: number;
  name: string;
  image: string;
  href: string;
  xAntibody: boolean;
  levels: [
    {
      id: number;
      level: string;
    }
  ];
  images: [
    {
      href: string;
      transparent: boolean;
    }
  ];
  types: [
    {
      id: number;
      type: string;
    }
  ];
  attributes: [
    {
      id: number;
      attribute: string;
    }
  ];
  fields: [
    {
      id: number;
      field: string;
      image: string;
    }
  ];
  priorEvolutions: [
    {
      id: number;
      digimon: string;
      condition: string;
      image: string;
      url: string;
    }
  ];
  nextEvolutions: [
    {
      id: number;
      digimon: string;
      condition: string;
      image: string;
      url: string;
    }
  ];
};
