import { CircularProgress } from "@mui/material";

import { StyledLoadingWrapper } from "./Loading.styles";

const Loading = () => {
  return (
    <StyledLoadingWrapper>
      <CircularProgress color="inherit" />
    </StyledLoadingWrapper>
  );
};

export default Loading;
