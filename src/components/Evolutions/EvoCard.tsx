import { Evolution } from "@/types/Digimon";
import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
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
          />
        </>
      )}
    </>
  );
};

export default EvoCard;
