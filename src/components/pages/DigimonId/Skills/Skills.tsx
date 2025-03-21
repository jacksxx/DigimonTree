import { useState } from "react";
import * as S from "./styles";
import type { DigiSkill } from "@/types/Digimon";
import NoDataMessage from "@/components/common/NoData/NoDataMessage";

const Skills = ({ skills }: { skills: DigiSkill[] }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <S.SkillContainer>
      <S.SkillHeader $show={show} onClick={() => setShow(!show)}>
        Habilidades
      </S.SkillHeader>
      {show && (
        <S.Skills>
          {skills.length > 0 ? (
            <>
              {skills.map((s) => (
                <div key={s.id} className="rounded-md border border-white p-2">
                  <h1 className="text-center font-semibold text-lg">
                    {s.skill}
                  </h1>
                  <p className="text-white">{s.description}</p>
                </div>
              ))}
            </>
          ) : (
            <h1 className='col-span-3 text-center'>
              <NoDataMessage />
            </h1>
          )}
        </S.Skills>
      )}
    </S.SkillContainer>
  );
};

export default Skills;
