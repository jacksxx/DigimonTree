import React from "react";
import Image from "next/image";
import { Digimon } from "@/types/Digimon";
import { useDigimon } from "@/hooks/useDigimon";
import FieldSets from "./FieldSets";

const DigiCard = ({ digimons }: { digimons: Digimon }) => {
  const { srcimg, level, attribute, type, field, fieldimg } =
    useDigimon(digimons);  
    
  return (
    <div
      className="m-8 rounded-lg border-[1px] border-black shadow-sm shadow-black bg-white hover:scale-110 max-w-[750px] flex flex-col min-w-[350px] pt-2 pb-5 gap-y-5"
      key={digimons.id}
    >
      <p className="pt-1 text-[14px] font-extrabold italic flex flex-col text-center">
        {digimons.id}
      </p>
      <div className="overflow-hidden rounded-t-lg ">
        <Image
          alt={digimons.name}
          src={srcimg}
          width={450}
          height={450}
          priority
          className="h-full w-full px-[80px] transition ease-in-out duration-500 hover:-scale-x-100 bg-inherit"
        />
      </div>
      <div className="m-2 flex flex-col px-1 py-1 gap-2">
        <div>
          <h1 className="text-[20px] font-semibold underline underline-offset-2 text-center">
            {digimons.name}
          </h1>
        </div>
        <div className="grid grid-flow-col grid-cols-3 text-center">
          <div>
            <h1 className="text-[26px] font-semibold">Level</h1>
            {level.map((level, id) => (
              <h2 key={id}>{level}</h2>
            ))}
          </div>
          <div>
            <h1 className="text-[26px] font-semibold">Atributo</h1>
            {attribute.map((att, id) => (
              <h2 key={id}>{att}</h2>
            ))}
          </div>
          <div>
            <h1 className="text-[26px] font-semibold">Tipo</h1>
            {type.map((typ, id) => (
              <h2 key={id}>{typ}</h2>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-items-center justify-center gap-10 ">
          {field.map((fi, id) => (
            <FieldSets field={fi} fimg={fieldimg[id]} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigiCard;
