import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";
import { Evolution } from "@/types/Digimon";

type CardProps = {
    w: number;
    h: number;
    extra?: ReactElement;    
    evolutions: Evolution;
  };

const EvoCardBody = ({ w, h, extra, evolutions }: CardProps) => {
  return (
    <div className="m-2 py-2 rounded-lg border-[1px] border-black shadow-sm shadow-black bg-white ">
      <Link key={evolutions.id} href={`/digimons/${evolutions.id}`}>
        <div className="overflow-hidden rounded-t-lg transition ease-in-out duration-500 hover:-scale-x-100 px-5">
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
          <h1 className="text-[18px] sm:text-[12px] md:text-[14-px] font-semibold break-words">
            {evolutions.digimon}
          </h1>
        </div>
      </Link>
      <div className="block text-center justify-center">{extra}</div>
    </div>
  );
};

export default EvoCardBody;
