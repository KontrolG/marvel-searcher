import { useState, useEffect } from "react";
import MarvelAPI from "../calls/MarvelAPI";
import useLoading from "./useLoading";

const useGetMarvelCharacterById = (characterId) => {
  const [isLoading, startLoading, finishLoading] = useLoading(true);
  const defaultCharacterState = {
    name: null,
    description: null,
    comics: {
      items: []
    },
    thumbnail: {
      path: null,
      ext: null
    }
  };
  const [character, setCharacter] = useState(defaultCharacterState);

  const changeCharacter = (response) => {
    const { status, data } = response.data;
    if (status === "Ok") {
      console.log(data.results[0]);
      setCharacter(data.results[0]);
    }
  };

  useEffect(() => {
    startLoading();
    MarvelAPI.getCharacterById(characterId)
      .then(changeCharacter)
      .finally(finishLoading);
  }, []);

  return [isLoading, character];
};

export default useGetMarvelCharacterById;
