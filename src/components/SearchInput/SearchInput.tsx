import React, { SelectHTMLAttributes } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "./styles";
import { DigiAll } from "@/types/DigiAll";

interface iSearchDigimon {
  filterDigimon: (name: string) => void;
}
const SearchInput = ({ filterDigimon }: iSearchDigimon) => {
  const { register, handleSubmit } = useForm<DigiAll>();
  const onSubmit: SubmitHandler<DigiAll> = async (data, event) => {
    event?.preventDefault();
    //In case of use button for search
    //filterDigimon(data.name);
  };
  //Input Handle Change
  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterDigimon(event.target.value);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Input
        className="px-2 bg-yellow-500/70 ring-1 ring-black rounded-md w-[300px] placeholder:text-black focus:ring-black focus:ring-2 outline-none font-semibold"
        placeholder="Exemplo: Dukemon"
        {...register("name")}
        onChange={handleTagsChange}
      />
    </S.Form>
  );
};

export default SearchInput;
