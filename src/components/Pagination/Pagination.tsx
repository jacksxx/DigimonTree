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
  const { handleSubmit, register, setValue } = useForm<{
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //Next Button Handle
  const handleNextClick = () => {
    setValue("currentPage", initialPage++);
    onPageChange(initialPage++);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (initialPage <= 1) {
      onPageChange(1);
    } else if (initialPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [initialPage, totalPages, onPageChange]);
  return (
    <S.Container>
      <S.Wrapper>
        <S.PrevButton
          disabled={initialPage <= 1}
          onClick={handlePrevClick}
          initialPage={initialPage}
        >
          Anterior
        </S.PrevButton>
        <S.FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.InputPage
              type="text"
              value={initialPage}
              {...register("currentPage")}
              onChange={handleIChange}
            />
          </form>
          <S.TotalPages>{`/ ${totalPages}`}</S.TotalPages>
        </S.FormContainer>
        <S.NextButton
          disabled={initialPage >= totalPages}
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
