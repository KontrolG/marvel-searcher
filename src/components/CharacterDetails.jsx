import React, { Fragment } from "react";
import ConnectionErrorMessage from "./ConnectionErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import useGetMarvelCharacterById from "../hooks/useGetMarvelCharacterById";
import CharacterDetailsSection from "./CharacterDetailsSection";

const CharacterDetails = ({ match, ...props }) => {
  const characterId = match.params.id;
  const [isLoading, character, error] = useGetMarvelCharacterById(characterId);

  return isLoading ? (
    <LoadingSpinner />
  ) : error ? (
    <ConnectionErrorMessage />
  ) : (
    <CharacterDetailsSection character={character} />
  );
};

export default CharacterDetails;
