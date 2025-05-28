"use client";
import Digimon, { DigimonSkeleton } from "@/components/pages/DigimonId/Digimon";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<DigimonSkeleton />}>
      <Digimon />
    </Suspense>
  );
};

export default page;
