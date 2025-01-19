import type { DigiEvolution } from "@/types/Digimon";
import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";
import Evolutions from "./Evolutions";

type CardProps = {
  isNextEvolution: boolean;
  evolutions: DigiEvolution;
};

const EvoCard = ({ isNextEvolution, evolutions }: CardProps) => {
  return (
    <S.Container $isNextEvolution={isNextEvolution}>
      <Link key={evolutions.id} href={`/digimons/${evolutions.digimon}`}>
        <S.ImageWrapper>
          <Image
            key={evolutions.id}
            alt={evolutions.digimon}
            src={evolutions.image}
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
      </Link>
      <S.InfoWrapper>
        <S.Name>{evolutions.digimon}</S.Name>
      </S.InfoWrapper>
      <S.Extra>
        <Evolutions evolutions={evolutions} />
      </S.Extra>
    </S.Container>
  );
};

export default EvoCard;
