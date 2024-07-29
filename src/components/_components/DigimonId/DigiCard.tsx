import React from "react";
import Image from "next/image";
import { useDigimon } from "@/hooks/useDigimon";
import FieldSets from "./FieldSets";
import * as S from "./styles";
import { DigiAll } from "@/types/DigiAll";

const DigiCard = ({ digimons }: { digimons: DigiAll }) => {
  const { name, srcimg, level, attribute, type, field, fieldimg } =
    useDigimon(digimons);
  return (
    <S.Container key={digimons.id}>
      <S.Id>{digimons.id}</S.Id>
      <S.ImageWrapper>
        <Image
          alt={name}
          src={srcimg}
          width={450}
          height={450}
          quality={100}
          priority
          style={{
            minHeight: "100%",
            width: "100%",
            paddingLeft: "80px",
            paddingRight: "80px",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </S.ImageWrapper>
      <S.InfoContaniner>
        <div>
          <S.Name>{name}</S.Name>
        </div>
        <S.InfoWrapper>
          <div>
            <S.InfoLabel>Level</S.InfoLabel>
            {level.map((level, id) => (
              <S.Infos key={id}>{level}</S.Infos>
            ))}
          </div>
          <div>
            <S.InfoLabel>Atributo</S.InfoLabel>
            {attribute.map((att, id) => (
              <S.Infos key={id}>{att}</S.Infos>
            ))}
          </div>
          <div>
            <S.InfoLabel>Tipo</S.InfoLabel>
            {type.map((typ, id) => (
              <S.Infos key={id}>{typ}</S.Infos>
            ))}
          </div>
        </S.InfoWrapper>
        <S.FieldSets>
          {field.map((fi, id) => (
            <FieldSets field={fi} fimg={fieldimg[id]} key={id} />
          ))}
        </S.FieldSets>
      </S.InfoContaniner>
    </S.Container>
  );
};

export default DigiCard;
