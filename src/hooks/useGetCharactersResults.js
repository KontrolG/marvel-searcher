import { useState, useEffect } from "react";
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
  const [error, setError] = useState(null);

  const unmountResults = () => setResults([]);

  useEffect(() => {
    startLoading();
    setError(null);
    const APICall = characterNameQuery !== ""
      ? MarvelAPI.getCharacterByName(characterNameQuery)
      : MarvelAPI.getCharacters();

    APICall.then(setResults).catch(setError).finally(finishLoading);
    return unmountResults;
  }, [characterNameQuery]);

  return [isLoading, results, error];
};

export default useGetCharactersResults;
