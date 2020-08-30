import React from "react";
import CharactersSection from "./CharactersSection";
import LoadingSpinner from "./LoadingSpinner";
import useGetCharactersResults from "../hooks/useGetCharactersResults";

const CharactersResults = () => {
  const [isLoading, results] = useGetCharactersResults();

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <CharactersSection characters={results} />
  );
};

export default CharactersResults;
