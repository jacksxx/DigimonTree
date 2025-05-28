import Link from "next/link";
import * as S from "./styles";
import type { DigimonPages } from "@/types/DigimonPage";
import Image from "next/image";

const DigimonList = ({ digimons }: { digimons: DigimonPages["content"] }) => {
  return (
    <S.ListaUl>
      {digimons.map((digimon) => (
        <S.ListaLI key={digimon.id}>
          <Link href={`/digimons/${digimon.name}`}>
            <S.CardContainer>
              <S.ImageWrapper>
                <Image
                  alt={digimon.name}
                  src={digimon.image}
                  fill
                  quality={100}
                  priority
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </S.ImageWrapper>
              <S.NameWrapper>
                <S.Name>{digimon.name}</S.Name>
              </S.NameWrapper>
            </S.CardContainer>
          </Link>
        </S.ListaLI>
      ))}
    </S.ListaUl>
  );
};

export default DigimonList;

export const DigimonListSkeleton = ({ count }: { count: number }) => {
  return (
    <S.ListaUl>
      {Array.from({ length: count }).map((_, index) => (
        <S.ListaLI key={`${count}-${index + 1}`}>
          <S.CardContainer>
            <S.ImageWrapperSkeleton />
            <S.NameWrapperSkeleton>
              <div />
            </S.NameWrapperSkeleton>
          </S.CardContainer>
        </S.ListaLI>
      ))}
    </S.ListaUl>
  );
};
