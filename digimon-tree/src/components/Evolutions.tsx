import { useDigimon } from "@/hooks/useDigimon";
import { Digimon, Evolution } from "@/types/Digimon";
import React from "react";

type EvoProps = {
  evolutions: Evolution;
  nextEve: boolean;
};

const Evolutions = ({ evolutions, nextEve }: EvoProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className=" font-semibold text-[12px]">Condição para Evolução:</h1>
      <p className="break-words text-center">
        * {nextEve ? evolutions.condition : evolutions.condition}
      </p>
    </div>
  );
};

export default Evolutions;
