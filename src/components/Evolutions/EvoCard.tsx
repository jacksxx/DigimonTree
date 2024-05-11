import { Evolution } from "@/types/Digimon";
import React, { ReactElement } from "react";
import EvoCardBody from "./EvoCardBody";

type CardProps = {
  w: number;
  h: number;
  extra?: ReactElement;
  evo: boolean;
  evolutions: Evolution;
};

const EvoCard = ({ w, h, extra, evo, evolutions }: CardProps) => {
  return (
    <>
      {evo ? (
        <>
          <EvoCardBody
            evolutions={evolutions}
            h={h}
            w={w}
            extra={extra}
            key={evolutions.id}
            evo={evo}
          />
        </>
      ) : (
        <>
          <EvoCardBody
            evolutions={evolutions}
            h={h}
            w={w}
            extra={extra}
            key={evolutions.id}
            evo={evo}
          />
        </>
      )}
    </>
  );
};

export default EvoCard;
