"use client";

import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className=" flex justify-center mt-10">
      <div className="flex flex-col text-center border-[1px] max-w-[850px] min-h-[500px] border-black rounded-md bg-slate-100/70  gap-5 px-5 items-center justify-center">
        <h1 className="text-[32px] break-words font-semibold">
          Essa é uma página criada para catalogar e listar Digimons
        </h1>
        <br />
        <p className=" break-words text-[20px] font-medium">
          Está sendo utilizado TypeScript, React, Next e API prévia do:
          <span className="italic">https://digi-api.com/</span>
        </p>
        <br />
        <Link
          href={"/digimons"}
          className="text-center text-[30px] font-semibold rounded-md px-3 bg-gradient-radial from-red-500 to-slate-50 ring-2 ring-red-400 transition duration-1000 delay-100 ease-in-out  hover:scale-105 sm:hover:scale-125 hover:from-red-500 hover:to-black hover:ring-4 hover:ring-yellow-500 hover:font-bold hover:text-yellow-500/80 animate-pulse  hover:animate-none md:hover:scale-150"
        >
          Vamos conhecer os Digimons!!!
        </Link>
      </div>
    </div>
  );
};

export default About;
