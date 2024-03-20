import styled from "@emotion/styled";

import { Card, CardMedia, Typography } from "@mui/material";

export const StyledCard = styled(Card)`
  width: 300px;
  height: 310px;
  margin: 10px;
  background-color: #7BDCB5;
`;

export const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 250px;
`;

export const StyledFallbackImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: #545E69;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  color: #FFFFFF;
`;
