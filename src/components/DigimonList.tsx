import React from "react";
import Card from "./Card";
import Link from "next/link";
import { AllDigimon } from "@/types/AllDigimon";

const DigimonList = ({ digimon }: { digimon: AllDigimon[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
      {digimon.map((digimons: AllDigimon) => (
        <Link
          key={digimons.id}
          href={`/digimons/${digimons.id}`}
          className="hover:scale-105"
        >
          <Card h={350} w={350} digimons={digimons} key={digimons.id} />
        </Link>
      ))}
    </ul>
  );
};

export default DigimonList;