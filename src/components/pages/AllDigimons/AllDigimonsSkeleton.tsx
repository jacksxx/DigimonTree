import * as S from "./styles";
import {
  DigimonListSkeleton,
} from "@/components/pages/AllDigimons/DigimonList";
import { DigimonSearchSkeleton } from "./Filters/Filters";

export const AllDigimonsSkeleton = () => {
  return (
    <section>
      <S.ContainerSearch>
        <DigimonSearchSkeleton />
      </S.ContainerSearch>

      <DigimonListSkeleton count={20} />

      <div className="flex justify-center gap-2 py-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-10 animate-pulse rounded bg-gray-200"
          />
        ))}
      </div>
    </section>
  );
};

export default AllDigimonsSkeleton;
