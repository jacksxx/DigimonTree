import React, { ReactElement } from "react";
import Image from "next/image";
import { AllDigimon } from "@/types/AllDigimon";

type cardProps = {
  digimons: AllDigimon;
  w: number;
  h: number;
  extra?: ReactElement;
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
          className="h-full w-full rounded-md object-cover"
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
