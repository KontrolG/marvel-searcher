import { useEffect } from "react";
import { useCharactersSearchContext } from "../contexts/CharactersSearchContext";
import useLoading from "./useLoading";
import MarvelAPI from "../calls/MarvelAPI";

const useGetCharactersResults = () => {
  const {
    characterNameQuery,
    results,
    setResults,
  } = useCharactersSearchContext();
  const [isLoading, startLoading, finishLoading] = useLoading(true);

  const changeResults = (response) => {
    const { status, data } = response.data;
    if (status === "Ok") {
      setResults(data.results);
    }
  };

  useEffect(() => {
    setResults([]);
    startLoading();
    const APICall = characterNameQuery !== ""
      ? MarvelAPI.getCharacterByName(characterNameQuery)
      : MarvelAPI.getCharacters();

    APICall.then(changeResults).finally(finishLoading);
  }, [characterNameQuery]);

  return [isLoading, results];
};

export default useGetCharactersResults;
