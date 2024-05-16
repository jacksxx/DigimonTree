"use client";
import * as S from "./styles";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          Essa é uma página criada para catalogar e listar Digimons
        </S.Header>
        <br />
        <S.Text>
          Está sendo utilizado TypeScript, React, Next e API prévia do:
          <span className="italic pl-1">https://digi-api.com/</span>
        </S.Text>
        <br />
        <Link href={"/digimons"}>
          <S.Start>Vamos conhecer os Digimons!!!</S.Start>
        </Link>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
