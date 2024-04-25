import React from "react";

const Footer = () => {
  return (
    <footer className="fixed w-full flex flex-col z-0 bottom-0 font-semibold text-center gap-3 bg-slate-100 rounded-sm">
      Digimon Tree V1.0 - {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
