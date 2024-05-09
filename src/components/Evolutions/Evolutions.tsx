import { Evolution } from "@/types/Digimon";
import React, { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

type EvoProps = {
  evolutions: Evolution;
  nextEve: boolean;
};

const Evolutions = ({ evolutions, nextEve }: EvoProps) => {
  const [ev, setEv] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className=" font-semibold text-[12px]">Condição para Evolução:</h1>

      {nextEve ? (
        <div className="flex flex-col items-center">
          {evolutions.condition !== "" ? (
            <button
              onClick={() => setEv(!ev)}
              className={`rounded-full transition bg-green-500 ease-in duration-150 ${
                ev ? "rotate-180" : "0"
              }`}
            >
              <FaChevronCircleDown />
            </button>
          ) : (
            <button disabled className="bg-red-500 rounded-full">
              <FaChevronCircleDown />
            </button>
          )}
          {ev ? (
            <p className={`${ev ? "pb-1" : "h-0 invisible opacity-0"}`}>
              {evolutions.condition}
            </p>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {evolutions.condition !== "" ? (
            <button
              onClick={() => setEv(!ev)}
              className={`rounded-full transition bg-green-500 ease-in duration-150 ${
                ev ? "rotate-180" : "0"
              }`}
            >
              <FaChevronCircleDown />
            </button>
          ) : (
            <button disabled className="bg-red-500 rounded-full">
              <FaChevronCircleDown />
            </button>
          )}
          {ev ? (
            <p className={`${ev ? "pb-1" : "h-0 invisible opacity-0"}`}>
              {evolutions.condition}
            </p>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Evolutions;
