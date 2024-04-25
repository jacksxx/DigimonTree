import { Evolution } from "@/types/Digimon";
import React, { ReactElement } from "react";
import Image from "next/image";


type CardProps = {  
  w: number;
  h: number;
  extra?: ReactElement;
  evo: boolean;
  evolutions: Evolution;
};

const EvoCard = ({  w, h, extra, evo, evolutions }: CardProps) => {
  
  if (evo) {
    return (
      <>
        <div className="m-2 rounded-lg border-[1px] border-black shadow-sm shadow-black bg-white p-1">
          <div className="overflow-hidden rounded-t-lg">
            <Image
              key={evolutions.id}
              alt={evolutions.digimon}
              src={evolutions.image}
              width={w}
              height={h}
              priority
              className="h-full w-full rounded-md"
            />
          </div>
          <div className="m-2 text-center">
            <h1 className="text-[20px] sm:text-[14px] md:text-[16-px] lg:text-[18px] font-semibold underline underline-offset-2">
              {evolutions.digimon}
            </h1>
          </div>
          <div>{extra}</div>
        </div>
      </>
    );
  } else {
    return (
      <div className="m-2 rounded-lg border-[1px] border-black shadow-sm shadow-black bg-white p-1">
        <div className="overflow-hidden rounded-t-lg">
          <Image
            key={evolutions.id}
            alt={evolutions.digimon}
            src={evolutions.image}
            width={w}
            height={h}
            priority
            className="h-full w-full rounded-md object-fill"
          />
        </div>
        <div className="m-2 text-center">
          <h1 className="text-[20px] sm:text-[14px] md:text-[16-px] lg:text-[18px] font-semibold underline underline-offset-2">
            {evolutions.digimon}
          </h1>
        </div>
        <div>{extra}</div>
      </div>
    );
  }
};

export default EvoCard;
