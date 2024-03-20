import { useContext, useEffect } from "react";

import { AppContext } from "../../context/AppContext";
import useDogs from "../../state/useDogs";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import DogsList from "../../components/DogsList/DogsList";

import { StyledMain } from "./Dogs.styles";

function Dogs() {
  const { getDogs, dogs, dogsLoading, dogsError } = useDogs();
  const { setState } = useContext(AppContext);

  useEffect(() => {
    setState(dogs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dogs]);

  useEffect(() => {
    getDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMain>
      {dogsLoading && <Loading />}
      {dogsError && <Error />}
      {dogs && <DogsList />}
    </StyledMain>
  );
}

export default Dogs;
