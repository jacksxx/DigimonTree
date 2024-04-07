import { Digimon, Evolution } from "@/types/Digimon";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EvoCard from "./EvoCard";
import Evolutions from "./Evolutions";

type EvoListProps = {
  digimon: Digimon;
  evo: boolean;
  evolutions: Evolution[];
};

const EvoList = ({ digimon, evo, evolutions }: EvoListProps) => {
  console.log(digimon);
  console.log(evo);
  console.log("evolutions", evolutions);
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {evolutions.map((evoItem: Evolution) => (
          <Link
            key={evoItem.id}
            href={`/digimons/${evoItem.id}`}
            className="hover:scale-105"
          >
            <EvoCard
              h={150}
              w={150}
              key={evoItem.id}
              evo={evo}
              evolutions={evoItem}
              extra={
                <Evolutions evolutions={evoItem} nextEve={evo} key={evoItem.id} />
              }
              
            />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default EvoList;
