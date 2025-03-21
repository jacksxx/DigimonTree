import type React from "react";
import * as S from "./styles";
import { useState, type Dispatch, type SetStateAction } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useDebounce } from "@/hooks/useDebounce";

interface PaginationProps {
  pagination: { page: number; pageSize: number };
  setPagination: Dispatch<SetStateAction<{ page: number; pageSize: number }>>;
  totalPages: number;
}

const Pagination = ({
  pagination,
  setPagination,
  totalPages,
}: PaginationProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  useDebounce({
    value: inputValue,
    callback: (debounceValue) => {
      if (debounceValue && !Number.isNaN(Number(debounceValue))) {
        const pageNumber = Number(debounceValue);
        const clampedPage = Math.max(0, Math.min(pageNumber, totalPages));
        setPagination((prev) => ({ ...prev, page: clampedPage }));
      }
    },
  });

  const handlePageChange = (pageNumber: number) => {
    const clampedPage = Math.max(0, Math.min(pageNumber, totalPages));
    setPagination((prev) => ({ ...prev, page: clampedPage }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevClick = () => {
    handlePageChange(pagination.page - 1);
  };

  const handleNextClick = () => {
    handlePageChange(pagination.page + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Button disabled={pagination.page === 0} onClick={handlePrevClick}>
          <FaArrowAltCircleLeft />
        </S.Button>
        <S.FormContainer>
          <S.InputPage
            type="tel"
            min={1}
            max={totalPages}
            value={inputValue || pagination.page.toString()}
            onChange={handleInputChange}
          />
          <S.TotalPages>{`/ ${totalPages}`}</S.TotalPages>
        </S.FormContainer>
        <S.Button
          disabled={pagination.page >= totalPages}
          onClick={handleNextClick}
        >
          <FaArrowAltCircleRight />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Pagination;
