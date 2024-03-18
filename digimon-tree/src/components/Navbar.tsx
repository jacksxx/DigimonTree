import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-2 mt-2 mx-2  text-center shadow-lg rounded-lg bg-gradient-radial from-red-400 to-white">
      <Link
        href={"/"}
        className="font-semibold text-[32px] text-yellow-300/85 bg-red-300/10 hover:text-yellow-300 hover:bg-red-300/70 rounded-md p-2 hover:font-bold"
      >
        DIGIMON TREE
      </Link>
    </nav>
  );
};

export default Navbar;
