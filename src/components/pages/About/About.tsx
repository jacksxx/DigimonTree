"use client";
import * as S from "./styles";
import Link from "next/link";

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
          Styled-Components, Tanstack Query.
        </S.Text>
        <S.Text>
          Dados Consumidos da API :
          <Link
            href={"https://digi-api.com/"}
            className="ml-1 text-blue-600 hover:italic hover:underline"
          >
            digi-api.com
          </Link>
        </S.Text>
        <br />
        <Link href={"/digimons"} className="mb-1">
          <S.Start>Vamos conhecer os Digimons!!!</S.Start>
        </Link>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
