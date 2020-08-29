import React, { useEffect } from "react";
import CharactersSection from "./CharactersSection";
import { useCharactersSearchContext } from "../contexts/CharactersSearchContext";
import useLoading from "../hooks/useLoading";
import LoadingSpinner from "./LoadingSpinner";
import MarvelAPI from "../calls/MarvelAPI";

const CharactersResults = () => {
  const {
    characterNameQuery,
    results,
    setResults
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
    MarvelAPI.getCharacters().then(changeResults).finally(finishLoading);
  }, []);

  useEffect(() => {
    if (characterNameQuery === "") return;
    setResults([]);
    startLoading();
    MarvelAPI.getCharacterByName(characterNameQuery)
      .then(changeResults)
      .finally(finishLoading);
  }, [characterNameQuery]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <CharactersSection characters={results} />
  );
};

export default CharactersResults;
