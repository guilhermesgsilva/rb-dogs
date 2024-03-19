import DogItem from '../DogItem/DogItem';

const DogsList = ({ dogs, dogsBreeds }) => {
  return (
    <>
      {dogsBreeds &&
        dogsBreeds.map((item, index) => {
          return <DogItem key={index} dogBreed={item} subBreed={dogs[item]}/>;
        })}
    </>
  );
};

export default DogsList;
