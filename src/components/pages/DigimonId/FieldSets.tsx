import Image from "next/image";
import type { DigiField } from "@/types/Digimon";
import * as S from "./styles";
import { useState } from "react";
const fieldColors = [
    { field: "Metal Empire", color: "#645A5D" },
    { field: "Virus Busters", color: "#E9DFD5" },
    { field: "Nature Spirits", color: "#3F8255" },
    { field: "Nightmare Soldiers", color: "#475894" },
    { field: "Deep Savers", color: "#4468A5" },
    { field: "Wind Guardians", color: "#94C6C7" },
    { field: "Dragon's Roar", color: "#E65043" },
    { field: "Unknown", color: "#000" },
    { field: "Dark Area", color: "#000" },
  ];
const FieldSets = ({ field }: { field: DigiField }) => {
  
  const fieldColor =
    fieldColors.find((fc) => fc.field === field.field)?.color || "#fff";
  const [show, setShow] = useState<boolean>(false);
  return (
    <S.FieldSetContainer>
      <S.FieldSetImage onClick={() => setShow(!show)}>
        <Image
          alt={field.field}
          src={field.image}
          fill
          title={field.field}
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="shadow-black shadow-md"
        />
      </S.FieldSetImage>
      <S.FieldSetName $backgroundColor={fieldColor} $visible={show}>
        {field.field}
      </S.FieldSetName>
    </S.FieldSetContainer>
  );
};

export default FieldSets;
