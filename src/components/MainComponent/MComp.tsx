"use client";
import React, { ReactNode } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/queryClient";
import { Inter } from "next/font/google";
import * as S from "./styles";

const inter = Inter({ subsets: ["latin"] });

const MComp = ({ children }: { children: ReactNode }) => {
  return (
    <div className={inter.className}>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <S.Container>{children}</S.Container>
      </QueryClientProvider>
      <Footer />
    </div>
  );
};

export default MComp;
