"use client";
import Link from "next/link";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.NavBar>
      <S.Link>
        <Link href={"/"}>DIGIMON TREE</Link>
      </S.Link>
    </S.NavBar>
  );
};

export default Navbar;
