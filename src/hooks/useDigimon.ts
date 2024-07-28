import { Descriptions, DigiAll, Evolution } from "@/types/DigiAll";

//Try to filter Digimons
// const useGetDigimonIds = () => {
//   const { digimons } = useGetDigimons();

//   const ids = digimons ? digimons.map((d) => d.id) : [];

//   return { ids };
// };
// // Hook para obter detalhes dos Digimons por ID
// const useGetDigimonDetails = (ids: number[]) => {
//   const limitedIds = ids.slice(0, 500);
//   const queries = limitedIds.map((id) => ({
//     queryKey: ["digimon", id],
//     queryFn: () => getDigimonById(id),
//   }));
//   const resultqueries = useQueries({ queries });
//   return resultqueries;
// };
// export const useFilterDigimon = () => {
//   const { ids } = useGetDigimonIds();
//   const [filterLevels, setFilterLevels] = useState<string[]>([]);
//   const results = useGetDigimonDetails(ids ?? []);

//   const fLevels = results
//     ? Array.from(
//         new Set(
//           results
//             .filter((result) => result.data) // Filtrar apenas resultados válidos
//             .flatMap((result) => result.data?.levels.map((l) => l.level) || [])
//         )
//       )
//     : [];

//   if (
//     fLevels.length !== filterLevels.length ||
//     !fLevels.every((level) => filterLevels.includes(level))
//   ) {
//     setFilterLevels(fLevels);
//   }

//   return {
//     filterLevels,
//   };
// };

//Get infos
export const useDigimon = (digimon: DigiAll) => {
  //digimons Base
  const name = digimon.name
    .split(" ")
    .map((name) => name)
    .join("");
  const srcimg = digimon.images.map((img) => img.href).join("");
  const level = digimon.levels.map((lvl) => lvl.level.split(" "));
  const attribute = digimon.attributes.map((att) => att.attribute.split(" "));
  const type = digimon.types.map((t) => t.type.split(""));
  const field = digimon.fields.map((f) => f.field.split(","));
  const fieldimg = digimon.fields.map((fimg) =>
    fimg.image.split(",").join(" ")
  );
  const description = digimon.descriptions
    ?.filter((e) => e.language === "en_us")
    .map((e) => e.description);
  const skills = digimon.skills.map((s) => s.skill);
  const skillsdesc = digimon.skills.map((s) => s.description);

  return {
    name,
    srcimg,
    level,
    attribute,
    type,
    field,
    fieldimg,
    description,
    skills,
    skillsdesc,
  };
};
export const useEvolution = (evolution: Evolution) => {
  const name = evolution.digimon
    .split(" ")
    .map((name) => name)
    .join(" ");
  return {
    name,
  };
};
