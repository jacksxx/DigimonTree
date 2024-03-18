import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MComp = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="px-10 mb-10 pb-10 pt-2">{children}</div>
      <Footer />
    </>
  );
};

export default MComp;
