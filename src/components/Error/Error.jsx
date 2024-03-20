import { StyledErrorWrapper, StyledTypography } from "./Error.styles";

const Error = () => {
  return (
    <StyledErrorWrapper>
      <StyledTypography>
        Sorry, something went wrong. Please try again later.
      </StyledTypography>
    </StyledErrorWrapper>
  );
};

export default Error;
