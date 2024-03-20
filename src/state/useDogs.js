import { useState } from "react";

import dogServer from "../api/dogServer";

function useDogs() {
  const [dogs, setDogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDogs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await dogServer.get("/breeds/list/all");
      setDogs(response.data.message);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    getDogs,
    dogs,
    dogsLoading: loading,
    dogsError: error,
  };
}

export default useDogs;
