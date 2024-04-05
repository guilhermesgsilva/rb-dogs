import { useMemo } from "react";

import { StyledPaginatioWrapper, StyledButton } from "./Pagination.styles";

const Pagination = ({ totalPages, currentPage, setSearchParams }) => {
  const pagesArray = useMemo(() => {
    return Array.from({ length: totalPages }, (item, index) => index + 1);
  }, [totalPages]);

  return (
    <StyledPaginatioWrapper>
      <StyledButton
        disabled={currentPage == 1}
        onClick={() => {
          currentPage > 1 && setSearchParams({ page: Number(currentPage) - 1 });
        }}
      >
        {"<"}
      </StyledButton>
      {pagesArray.map((item, index) => {
        return (
          <StyledButton
            key={index}
            disabled={currentPage == item}
            onClick={() => {
              setSearchParams({ page: item });
            }}
          >
            <p key={index}>{item}</p>
          </StyledButton>
        );
      })}
      <StyledButton
        disabled={currentPage == totalPages}
        onClick={() => {
          currentPage < totalPages &&
            setSearchParams({ page: Number(currentPage) + 1 });
        }}
      >
        {">"}
      </StyledButton>
    </StyledPaginatioWrapper>
  );
};

export default Pagination;
