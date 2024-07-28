"use client";
import * as S from "./styles";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          Essa é uma página criada para listar e procurar seus Digimons
          favoritos
        </S.Header>
        <br />
        <S.Text>
          Está sendo utilizado principalmente: TypeScript, Next,
          Styled-Components.
        </S.Text>
        <S.Text>
          API :
          <Link
            href={"https://digi-api.com/"}
            className="ml-1 text-blue-600 hover:underline hover:italic"
          >
            digi-api.com
          </Link>
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
