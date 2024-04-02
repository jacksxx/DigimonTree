import { Digimon } from "@/types/Digimon";

export const useDigimon = (digimon: Digimon) => {
  //digimons Base
  const srcimg = digimon.images.map((img) => img.href).join("");
  const level = digimon.levels.map((lvl) => lvl.level.split(" "));
  const attribute = digimon.attributes.map((att) => att.attribute.split(" "));
  const type = digimon.types.map((t) => t.type.split(""));
  const field = digimon.fields.map((f) => f.field.split(","));
  const fieldimg = digimon.fields.map((fimg) =>
    fimg.image.split(",").join(" ")
  );
  //next Evo
  const nextEvoName = digimon.nextEvolutions.map((di) => di.digimon).join(" ");
  const nextEvoId = digimon.nextEvolutions.map((di) => di.id);
  const nextEvoImg = digimon.nextEvolutions.map((di) => di.image).join("");
  const nextEvoCondition = digimon.nextEvolutions
    .map((di) => di.condition)
    .join(" ");
  //prior Evo
  const preEvoName = digimon.priorEvolutions.map((di) => di.digimon).join(" ");
  const preEvoId = digimon.priorEvolutions.map((di) => di.id);
  const preEvoImg = digimon.priorEvolutions.map((di) => di.image).join("");
  const preEvoCondition = digimon.priorEvolutions
    .map((di) => di.condition)
    .join(" ");

  return {
    srcimg,
    level,
    attribute,
    type,
    field,
    fieldimg,
    nextEvoName,
    nextEvoId,
    nextEvoImg,
    nextEvoCondition,
    preEvoName,
    preEvoId,
    preEvoImg,
    preEvoCondition,
  };
};
