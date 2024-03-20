import { useState } from "react";

import dogServer from "../api/dogServer";

function useBreedDetails({ breedItem, dogs }) {
  const [breedImages, setBreedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBreedImages = async () => {
    setLoading(true);

    try {
      const response = await dogServer.get(`/breed/${breedItem}/images/random/5`);
      setBreedImages(response.data.message);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    getBreedImages,
    breedImages,
    subBreeds: dogs[breedItem],
    breedImagesLoading: loading,
    breedImagesError: error,
  };
}

export default useBreedDetails;
