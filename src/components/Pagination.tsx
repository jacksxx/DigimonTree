import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage: initialPage,
  totalPages,
  onPageChange,
}) => {
  const { register, handleSubmit, setValue } = useForm<{
    currentPage: number;
  }>();
  const onSubmit: SubmitHandler<{ currentPage: number }> = (data, event) => {
    event?.preventDefault();
  };
  setValue("currentPage", initialPage);
  const handleIChange = (event: any) => {
    onPageChange(event.target.value);
  };
  const handlePrevClick = () => {
    setValue("currentPage", initialPage--);
    onPageChange(initialPage--);
  };
  const handleNextClick = () => {
    setValue("currentPage", initialPage++);
    onPageChange(initialPage++);
  };

  return (
    <div className="flex flex-row items-center justify-center pt-5">
      <div className="flex flex-row bg-red-200 px-5 py-2 border-[1px] border-black rounded-md gap-1">
        <button
          disabled={initialPage === 1}
          onClick={handlePrevClick}
          className="p-1 border-2 border-black rounded-full"
        >
          Anterior
        </button>
        <div className="flex flex-row justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("currentPage")}
              className="text-center w-[30px] outline-none"
              onChange={handleIChange}
            />
          </form>
          <span className="font-bold pr-2">{`/ ${totalPages}`}</span>
        </div>

        <button
          disabled={initialPage === totalPages}
          onClick={handleNextClick}
          className="p-1 border-2 border-black rounded-full"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Pagination;
