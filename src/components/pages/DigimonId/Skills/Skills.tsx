import { useState } from "react";
import * as S from "./styles";
import type { DigiSkill } from "@/types/Digimon";

const Skills = ({ skills }: { skills: DigiSkill[] }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <S.SkillContainer>
      <S.SkillHeader $show={show} onClick={() => setShow(!show)}>
        Habilidades
      </S.SkillHeader>
      {show && (
        <S.Skills>
          {skills.map((s) => (
            <div key={s.id} className="rounded-md border border-white p-2">
              <h1 className="text-center font-semibold text-lg">{s.skill}</h1>
              <p className="text-white">{s.description}</p>
            </div>
          ))}
        </S.Skills>
      )}
    </S.SkillContainer>
  );
};

export default Skills;
