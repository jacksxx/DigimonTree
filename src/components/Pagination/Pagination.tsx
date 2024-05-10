import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage: initialPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const { register, handleSubmit, setValue } = useForm<{
    currentPage: number;
  }>();
  const onSubmit: SubmitHandler<{ currentPage: number }> = (data, event) => {
    event?.preventDefault();
  };

  setValue("currentPage", initialPage);
  //Input Change Handle of Current Page
  const handleIChange = (event: any) => {
    onPageChange(event.target.value);
  };
  //Previous Button Handle
  const handlePrevClick = () => {
    setValue("currentPage", initialPage--);
    onPageChange(initialPage--);
  };
  //Next Button Handle
  const handleNextClick = () => {
    setValue("currentPage", initialPage++);
    onPageChange(initialPage++);
  };
  useEffect(() => {
    if (initialPage <= 0) {
      onPageChange(1);
    } else if (initialPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [initialPage, totalPages, onPageChange]);
  return (
    <S.Container>
      <S.Wrapper>
        <S.PrevButton
          disabled={initialPage === 1}
          onClick={handlePrevClick}
          initialPage={initialPage}
        >
          Anterior
        </S.PrevButton>
        <S.FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.InputPage
              type="text"
              {...register("currentPage")}
              onChange={handleIChange}
            />
          </form>
          <S.TotalPages>{`/ ${totalPages}`}</S.TotalPages>
        </S.FormContainer>
        <S.NextButton
          disabled={initialPage === totalPages}
          onClick={handleNextClick}
          initialPage={initialPage}
          totalPages={totalPages}
        >
          Próxima
        </S.NextButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default Pagination;
