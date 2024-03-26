import React from "react";
import Image from "next/image";
import { Digimon } from "@/types/Digimon";

type cardProps = {
  digimons: Digimon;
  w: number;
  h: number;
};

const Card = (params: cardProps) => {  
  return (
    <div className="m-2 rounded-lg border-[1px] border-black shadow-sm shadow-black bg-white">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          alt={params.digimons.name}
          src={params.digimons.image}
          width={params.w}
          height={params.h}
          priority
          className="h-full w-full rounded-md"
        />
      </div>
      <div className="m-2  text-center">
        <h1 className="text-[20px] sm:text-[14px] md:text-[16-px] lg:text-[18px]  font-semibold underline underline-offset-2">
          {params.digimons.name}
        </h1>
      </div>
    </div>
  );
};

export default Card;
