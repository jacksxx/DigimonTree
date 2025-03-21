import Image from "next/image";
import FieldSets from "./FieldSets";
import * as S from "./styles";
import type { Digimon } from "@/types/Digimon";

const DigiCard = ({ digimon }: { digimon: Digimon }) => {
  return (
    <S.Container key={digimon.id}>
      <S.Id>{digimon.id}</S.Id>
      {digimon.xAntibody && <S.xAntibody>xAntibody</S.xAntibody>}
      <S.ReleaseDate>Ano: {digimon.releaseDate}</S.ReleaseDate>
      <S.ImageWrapper>
        <Image
          alt={digimon.name}
          src={digimon.images[0].href}
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
      <S.InfoContaniner>
        <div>
          <S.Name>{digimon.name}</S.Name>
        </div>
        <S.InfoWrapper>
          <div>
            <S.InfoLabel>Level</S.InfoLabel>
            {digimon.levels.map((level) => (
              <S.Infos key={level.id}>{level.level}</S.Infos>
            ))}
          </div>
          <div>
            <S.InfoLabel>Atributo</S.InfoLabel>
            {digimon.attributes.map((attribute, id) => (
              <S.Infos key={attribute.id}>{attribute.attribute}</S.Infos>
            ))}
          </div>
          <div>
            <S.InfoLabel>Tipo</S.InfoLabel>
            {digimon.types.map((type) => (
              <S.Infos key={type.id}>{type.type}</S.Infos>
            ))}
          </div>
        </S.InfoWrapper>
        <S.FieldSets>
          {digimon.fields.map((field) => (
            <FieldSets key={field.id} field={field} />
          ))}
        </S.FieldSets>
      </S.InfoContaniner>
    </S.Container>
  );
};

export default DigiCard;
