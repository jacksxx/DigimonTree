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
    callback: (debouncedValue) => {
      if (
        debouncedValue !== pagination.page &&
        debouncedValue >= 0 &&
        debouncedValue <= totalPages
      ) {
        setPagination((prev) => ({ ...prev, page: debouncedValue }));
      }
    },
  });

  useEffect(() => {
    setInputValue(pagination.page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pagination.page]);

  const clampPage = (page: number) => Math.min(Math.max(page, 0), totalPages);

  const handlePageChange = (pageNumber: number) => {
    const clamped = clampPage(pageNumber);
    if (clamped !== pagination.page) {
      setPagination((prev) => ({ ...prev, page: clamped }));
      setInputValue(clamped);
    }
  };

  const handlePrevClick = () => handlePageChange(pagination.page - 1);
  const handleNextClick = () => handlePageChange(pagination.page + 1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!Number.isNaN(value)) {
      setInputValue(clampPage(value));
    }
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
            min={0}
            max={totalPages}
            value={inputValue}
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
