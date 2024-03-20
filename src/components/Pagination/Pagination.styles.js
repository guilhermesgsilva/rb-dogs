import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledPaginatioWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  color: #17d48f;
  border-color: #17d48f;
  background-color: #ffffff;
  min-width: 0;
  line-height: 0;

  &:hover {
    border-color: #17d48f;
    background-color: #17d48f;
    color: #ffffff;
  }
`;
