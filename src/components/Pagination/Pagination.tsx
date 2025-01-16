"use client";
import type React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";

interface PaginationProps {
  pagination: { page: number; pageSize: number };
  setPagination: React.Dispatch<
    React.SetStateAction<{ page: number; pageSize: number }>
  >;
  totalPages: number;
}

const Pagination = ({
  pagination,
  setPagination,
  totalPages,
}: PaginationProps) => {
  const { register, handleSubmit } = useForm<{
    currentPage: number;
  }>({
    defaultValues: {
      currentPage: pagination.page + 1,
    },
  });

  const handlePageChange = (pageNumber: number) => {
    const clampedPage = Math.max(1, Math.min(pageNumber, totalPages));
    setPagination((prev) => ({ ...prev, page: clampedPage - 1 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevClick = () => {
    handlePageChange(pagination.page);
  };

  const handleNextClick = () => {
    handlePageChange(pagination.page + 2);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageNumber = Number(event.target.value);
    handlePageChange(pageNumber);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Button disabled={pagination.page === 0} onClick={handlePrevClick}>
          Anterior
        </S.Button>
        <S.FormContainer>
          <form
            onSubmit={handleSubmit((data) =>
              handlePageChange(data.currentPage)
            )}
          >
            <S.InputPage
              min={1}
              max={totalPages}
              value={pagination.page + 1}
              {...register("currentPage")}
              onChange={handleInputChange}
            />
          </form>
          <S.TotalPages>{`/ ${totalPages}`}</S.TotalPages>
        </S.FormContainer>
        <S.Button
          disabled={pagination.page + 1 >= totalPages}
          onClick={handleNextClick}
        >
          Próxima
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Pagination;
