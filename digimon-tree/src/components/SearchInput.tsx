import { Digimon } from "@/types/Digimon";
import { event } from "jquery";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface iSearchDigimon {
  filterDigimon: (name: string) => void;
}
const SearchInput = ({ filterDigimon }: iSearchDigimon) => {
  const { register, handleSubmit, watch } = useForm<Digimon>();
  const onSubmit: SubmitHandler<Digimon> = async (data, event) => {
    event?.preventDefault();
    //filterDigimon(data.name);
  };
  const handleTagsChange = (event: any) => {
    filterDigimon(event.target.value);
  };
  return (
    <form
      className="flex items-center justify-center gap-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="px-2 bg-red-200/50 ring-1 ring-black rounded-md w-[300px] placeholder:text-black/70 animate-pulse hover:animate-none focus:animate-none focus:ring-red-500 focus:ring-2 outline-none"
        placeholder="Exemplo: Dukemon"
        {...register("name")}
        onChange={handleTagsChange}
      />      
    </form>
  );
};

export default SearchInput;
