"use client";
import Card from "@/components/Card";
import { getAllDigimons } from "@/services/DigimonService";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Page = () => {
  const { data: digimons } = useQuery({
    queryKey: ["digimons"],
    queryFn: getAllDigimons,
  });

  return (
    <>
      {digimons ? (
        console.log(digimons)
        // <p>
          
        //   <Card props={Digimons} w={250} h={150} />
        // </p>
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export default Page;
