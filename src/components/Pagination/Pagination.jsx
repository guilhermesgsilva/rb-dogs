import { useMemo } from "react";

import { StyledPaginatioWrapper, StyledButton } from "./Pagination.styles";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pagesArray = useMemo(() => {
    return Array.from({ length: totalPages }, (item, index) => index + 1);
  }, [totalPages]);

  return (
    <StyledPaginatioWrapper>
      <StyledButton
        disabled={currentPage === 0}
        onClick={() => {
          currentPage > 0 && setCurrentPage(currentPage - 1);
        }}
      >
        {"<"}
      </StyledButton>
      {pagesArray.map((item, index) => {
        return (
          <StyledButton
            key={index}
            disabled={currentPage === item - 1}
            onClick={() => {
              setCurrentPage(item - 1);
            }}
          >
            <p key={index}>{item}</p>
          </StyledButton>
        );
      })}
      <StyledButton
        disabled={currentPage === totalPages - 1}
        onClick={() => {
          currentPage < totalPages - 1 && setCurrentPage(currentPage + 1);
        }}
      >
        {">"}
      </StyledButton>
    </StyledPaginatioWrapper>
  );
};

export default Pagination;
