import { Evolution } from "@/types/DigiAll";
import React, { ReactElement } from "react";
import EvoCardBody from "./EvoCardBody";

type CardProps = {
  extra?: ReactElement;
  evo: boolean;
  evolutions: Evolution;
};

const EvoCard = ({ extra, evo, evolutions }: CardProps) => {
  return (
    <>
      {evo ? (
        <>
          <EvoCardBody
            evolutions={evolutions}
            extra={extra}
            key={evolutions.id}
            evo={evo}
          />
        </>
      ) : (
        <>
          <EvoCardBody
            evolutions={evolutions}
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
