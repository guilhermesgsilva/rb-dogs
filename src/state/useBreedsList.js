import { useMemo } from "react";

function useBreedsList({ dogs }) {
  const breedsList = useMemo(() => {
    return dogs && Object.keys(dogs);
  }, [dogs]);

  return {
    breedsList,
  };
}

export default useBreedsList;
