import { AllDigimon } from "@/types/AllDigimon";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface iSearchDigimon {
  filterDigimon: (name: string) => void;
}
const SearchInput = ({ filterDigimon }: iSearchDigimon) => {
  const { register, handleSubmit, watch } = useForm<AllDigimon>();
  const onSubmit: SubmitHandler<AllDigimon> = async (data, event) => {
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
        className="px-2 bg-red-300/70 ring-1 ring-black rounded-md w-[300px] placeholder:text-black focus:ring-black focus:ring-2 outline-none"
        placeholder="Exemplo: Dukemon"
        {...register("name")}
        onChange={handleTagsChange}
      />
    </form>
  );
};

export default SearchInput;
