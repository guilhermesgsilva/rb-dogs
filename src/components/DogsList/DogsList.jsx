import { useContext, useMemo, useState } from "react";

import { AppContext } from "../../context/AppContext";
import useBreedsList from "../../state/useBreedsList";

import Pagination from "../Pagination/Pagination";
import DogItem from "../DogItem/DogItem";

import { StyledListWrapper } from "./DogsList.styles";

export const ITEMS_PER_PAGE = 12;

const DogsList = () => {
  const { state: dogs } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(0);
  const { breedsList } = useBreedsList({ dogs });

  const totalPages = useMemo(() => {
    return Math.ceil(breedsList?.length / ITEMS_PER_PAGE);
  }, [breedsList]);

  const breedsToShow = useMemo(() => {
    return breedsList?.slice(
      currentPage * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [breedsList, currentPage]);

  return (
    <>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <StyledListWrapper>
        {breedsToShow &&
          breedsToShow.map((item, index) => {
            return <DogItem key={index} breedItem={item} />;
          })}
      </StyledListWrapper>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default DogsList;
