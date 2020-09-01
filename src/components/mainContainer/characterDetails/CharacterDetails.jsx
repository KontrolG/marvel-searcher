import React, { Fragment } from "react";
import CharacterDetailsErrorMessage from "./CharacterDetailsErrorMessage";
import LoadingSpinner from "../../shared/LoadingSpinner";
import useGetMarvelCharacterById from "../../../hooks/useGetMarvelCharacterById";
import CharacterDetailsSection from "./CharacterDetailsSection";

const CharacterDetails = ({ match, ...props }) => {
  const characterId = match.params.id;
  const [isLoading, character, error] = useGetMarvelCharacterById(characterId);

  return isLoading ? (
    <LoadingSpinner />
  ) : error ? (
    <CharacterDetailsErrorMessage error={error} />
  ) : (
    <CharacterDetailsSection character={character} />
  );
};

export default CharacterDetails;
