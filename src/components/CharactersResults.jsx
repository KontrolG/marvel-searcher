import React from "react";
import CharactersResultsSection from "./CharactersResultsSection";
import LoadingSpinner from "./LoadingSpinner";
import useGetCharactersResults from "../hooks/useGetCharactersResults";
import ConnectionErrorMessage from "./ConnectionErrorMessage";

const CharactersResults = () => {
  const [isLoading, results, error] = useGetCharactersResults();

  return isLoading ? (
    <LoadingSpinner />
  ) : error ? (
    <ConnectionErrorMessage />
  ) : (
    <CharactersResultsSection characters={results} />
  );
};

export default CharactersResults;
