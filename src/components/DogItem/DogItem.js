import { useEffect, useState } from "react";

import dogServer from "../../api/dogServer";

const DogItem = ({ dogBreed, subBreeds }) => {
  console.log("🚀 ~ DogItem ~ subBreeds:", subBreeds) // TODO: Review
  const [dogImg, setDogImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDogImg = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await dogServer.get(`/breed/${dogBreed}/images/random`);
      setDogImg(response.data.message);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>{dogBreed}</p>
      {dogImg && (
        <img style={{ height: 100, width: 100 }} src={dogImg} alt={dogBreed} />
      )}
    </div>
  );
};

export default DogItem;
