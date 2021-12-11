import React from "react";
import PropTypes from "prop-types";
import CharacterDetailsErrorMessage from "./CharacterDetailsErrorMessage";
import LoadingSpinner from "../../shared/LoadingSpinner";
import useGetMarvelCharacterById from "../../../hooks/useGetMarvelCharacterById";
import CharacterDetailsSection from "./CharacterDetailsSection";

const CharacterDetails = ({ match }) => {
  const characterId = match.params.id;
  const [isLoading, character, error] = useGetMarvelCharacterById(characterId);

  if (error) {
    return <CharacterDetailsErrorMessage error={error} />;
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <CharacterDetailsSection character={character} />
  );
};

const matchShape = {
  params: PropTypes.shape({
    id: PropTypes.string
  })
};

CharacterDetails.propTypes = {
  match: PropTypes.shape(matchShape).isRequired
};

export default CharacterDetails;
