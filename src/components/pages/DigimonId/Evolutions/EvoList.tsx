import EvoCard from "./EvoCard";
import * as S from "./styles";
import NoDataMessage from "@/components/common/NoData/NoDataMessage";
import type { DigiEvolution } from "@/types/Digimon";

type EvoListProps = {
  isNextEvolution: boolean;
  evolutions: DigiEvolution[];
  showEvolutions: boolean;
};

const EvoList = ({
  isNextEvolution,
  evolutions,
  showEvolutions,
}: EvoListProps) => {
  return (
    <>
      {showEvolutions && (
        <div>
          {evolutions && evolutions.length > 0 ? (
            <S.ListUl>
              {evolutions.map((evoItem) => (
                <S.ListLI key={evoItem.id}>
                  <EvoCard
                    key={evoItem.id}
                    isNextEvolution={isNextEvolution}
                    evolutions={evoItem}
                  />
                </S.ListLI>
              ))}
            </S.ListUl>
          ) : (
            <NoDataMessage message="Evoluções Não Encontradas"/>
          )}
        </div>
      )}
    </>
  );
};

export default EvoList;
