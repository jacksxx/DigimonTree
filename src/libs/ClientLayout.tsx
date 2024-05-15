'use client';

import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import MComp from "@/components/MainComponent/MComp";

const inter = Inter({ subsets: ["latin"] });

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <body className={inter.className}>
      <MComp>{children}</MComp>
    </body>
  );
};

export default ClientLayout;
