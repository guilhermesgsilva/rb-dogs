import { useContext, useEffect } from "react";

import { CardContent } from "@mui/material";

import { AppContext } from "../../context/AppContext";
import useBreedDetails from "../../state/useBreedDetails";

import {
  StyledCard,
  StyledCardMedia,
  StyledFallbackImage,
  StyledTypography,
} from "./DogItem.styles";

const DogItem = ({ breedItem }) => {
  const { state: dogs } = useContext(AppContext);

  const { breedImages, getBreedImages, breedImagesLoading } = useBreedDetails({
    breedItem,
    dogs,
  });

  useEffect(() => {
    getBreedImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breedItem]);

  return (
    <StyledCard raised>
      {breedImagesLoading ? (
        <StyledFallbackImage />
      ) : (
        <StyledCardMedia
          component="img"
          image={breedImages[0]}
          alt={breedItem}
        />
      )}
      <CardContent>
        <StyledTypography>
          {breedItem.charAt(0).toUpperCase() + breedItem.slice(1)}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
};

export default DogItem;
