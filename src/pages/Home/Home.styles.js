import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledMain = styled.main`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  color: #17D48F;
  border-color: #17D48F;
  background-color: #FFFFFF;

  &:hover {
    border-color: #17D48F;
    background-color: #17D48F;
    color: #FFFFFF;
  } 
`;
