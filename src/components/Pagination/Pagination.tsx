import type React from "react";
import * as S from "./styles";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
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
  const [inputValue, setInputValue] = useState<number>(0);
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
    setInputValue((prev) => prev - 1);
  };

  const handleNextClick = () => {
    handlePageChange(pagination.page + 1);
    setInputValue((prev) => prev + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!Number.isNaN(value)) {
      const clampedPage = Math.max(0, Math.min(value, totalPages - 1));
      setInputValue(clampedPage);
      setPagination((prev) => ({ ...prev, page: clampedPage }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setInputValue(pagination.page);
  }, [pagination.page]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Button disabled={pagination.page === 0} onClick={handlePrevClick}>
          <FaArrowAltCircleLeft />
        </S.Button>
        <S.FormContainer>
          <S.InputPage
            type="tel"
            min={0}
            max={totalPages}
            value={pagination.page}
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
