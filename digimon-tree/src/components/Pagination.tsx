import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex flex-row items-center justify-center pt-5">
      <button        
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="p-1 border-2 border-black rounded-full"
      >Anterior</button>
      <span className="mx-2 font-bold">{`${currentPage}/${totalPages}`}</span>
      <button        
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="p-1 border-2 border-black rounded-full"
      >Próxima</button>
    </div>
  );
};

export default Pagination;
