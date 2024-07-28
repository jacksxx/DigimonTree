import { DigiAll } from "@/types/DigiAll";
import React, { useState } from "react";
import * as S from "./styles";

const Skills = ({ digimons }: { digimons: DigiAll }) => {
  const [show, setShow] = useState(false);
  return (
    <S.SkillContainer>
      <S.SkillHeader show={show} onClick={() => setShow(!show)}>
        Skills
      </S.SkillHeader>
      {show && (
        <S.Skills>
          {digimons.skills.map((s) => (
            <div key={s.id} className="border border-white p-2 rounded-md">
              <h1 className="font-semibold text-lg text-center">{s.skill}</h1>
              <p className="text-white">{s.description}</p>
            </div>
          ))}
        </S.Skills>
      )}
    </S.SkillContainer>
  );
};

export default Skills;
