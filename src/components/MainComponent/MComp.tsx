'use client'
import React, { ReactNode } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/queryClient";

const MComp = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <div className="px-10 mb-10 pb-10 pt-2">{children}</div>
      </QueryClientProvider>
      <Footer />
    </>
  );
};

export default MComp;
