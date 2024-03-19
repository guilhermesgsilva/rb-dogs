import { useEffect, useState } from "react";

import dogServer from "./api/dogServer";

import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import DogsList from "./components/DogsList/DogsList";

function App() {
  const [dogs, setDogs] = useState(null);
  const [dogsBreeds, setDogsBreeds] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDogs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await dogServer.get("/breeds/list/all");
      setDogs(response.data.message);
      setDogsBreeds(Object.keys(response.data.message));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <>
      <h1>RB Dogs</h1>
      {loading && <Loading />}
      {error && <Error />}
      {dogs && <DogsList dogs={dogs} dogsBreeds={dogsBreeds} />}
    </>
  );
}

export default App;
