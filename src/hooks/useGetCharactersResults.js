import { useEffect } from "react";
import { useCharactersSearchContext } from "../contexts/CharactersSearchContext";
import useLoading from "./useLoading";
import MarvelAPI from "../calls/MarvelAPI";

const useGetCharactersResults = () => {
  const {
    characterNameQuery,
    results,
    setResults
  } = useCharactersSearchContext();
  const [isLoading, startLoading, finishLoading] = useLoading(true);

  const unmountResults = () => setResults([]);

  useEffect(() => {
    startLoading();
    const APICall =
      characterNameQuery !== ""
        ? MarvelAPI.getCharacterByName(characterNameQuery)
        : MarvelAPI.getCharacters();

    APICall.then(setResults).finally(finishLoading);
    return unmountResults;
  }, [characterNameQuery]);

  return [isLoading, results];
};

export default useGetCharactersResults;
