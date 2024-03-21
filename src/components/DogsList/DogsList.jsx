import { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import useBreedsList from "../../state/useBreedsList";

import Pagination from "../Pagination/Pagination";
import DogItem from "../DogItem/DogItem";

import { StyledListWrapper } from "./DogsList.styles";

export const ITEMS_PER_PAGE = 12;

const DogsList = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { state: dogs } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { breedsList } = useBreedsList({ dogs });

  const totalPages = useMemo(() => {
    return Math.ceil(breedsList?.length / ITEMS_PER_PAGE);
  }, [breedsList]);

  const lastIndex = useMemo(() => {
    return currentPage * ITEMS_PER_PAGE;
  }, [currentPage]);

  const firstIndex = useMemo(() => {
    return lastIndex - ITEMS_PER_PAGE;
  }, [lastIndex]);

  const breedsToShow = useMemo(() => {
    return breedsList?.slice(firstIndex, lastIndex);
  }, [breedsList, firstIndex, lastIndex]);

  useEffect(() => {
    const newPage = searchParams.get("page") || 1;
    setCurrentPage(newPage);
  }, [searchParams]);

  return (
    <>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setSearchParams={setSearchParams}
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
        setSearchParams={setSearchParams}
      />
    </>
  );
};

export default DogsList;
