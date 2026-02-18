import type React from "react";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useDebounce } from "@/hooks/useDebounce";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) => {
  const [inputValue, setInputValue] = useState<number>(currentPage);

  useDebounce({
    value: inputValue,
    callback: (debouncedValue) => {
      if (
        debouncedValue !== currentPage &&
        debouncedValue >= 1 &&
        debouncedValue <= totalPages
      ) {
        onPageChange(debouncedValue);
      }
    },
  });

  useEffect(() => {
    setInputValue(currentPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const clampPage = (page: number) => Math.min(Math.max(page, 1), totalPages);

  const handlePageChange = (pageNumber: number) => {
    const clamped = clampPage(pageNumber);
    if (clamped !== currentPage) {
      onPageChange(clamped);
      setInputValue(clamped);
    }
  };

  const handlePrevClick = () => handlePageChange(currentPage - 1);
  const handleNextClick = () => handlePageChange(currentPage + 1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!Number.isNaN(value)) {
      setInputValue(clampPage(value));
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Button disabled={currentPage === 1} onClick={handlePrevClick}>
          <FaArrowAltCircleLeft />
        </S.Button>
        <S.FormContainer>
          <S.InputPage
            type="tel"
            min={1}
            max={totalPages}
            value={inputValue}
            onChange={handleInputChange}
          />
          <S.TotalPages>{`/ ${totalPages}`}</S.TotalPages>
        </S.FormContainer>
        <S.Button
          disabled={currentPage >= totalPages}
          onClick={handleNextClick}
        >
          <FaArrowAltCircleRight />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Pagination;
