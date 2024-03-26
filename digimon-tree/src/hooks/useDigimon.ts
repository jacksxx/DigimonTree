import { Digimon } from "@/types/Digimon";
import React from "react";

export const useDigimon = (digimon: Digimon) => {
  const srcimg = digimon.images.map((img) => img.href).join("");
  const level = digimon.levels.map((lvl) => lvl.level.split(" "))
  const attribute = digimon.attributes.map((att) => att.attribute.split(" "))
  const type = digimon.types.map((t) => t.type.split(" "))
  const field = digimon.fields.map((f) => f.field.split(","))
  const fieldimg = digimon.fields.map((fimg) => fimg.image.split(",").join(" "))
  

  return { srcimg, level, attribute, type, field, fieldimg}
};


