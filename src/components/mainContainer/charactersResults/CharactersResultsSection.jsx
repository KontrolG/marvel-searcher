import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard";
import Message from "../../shared/Message";

const toCharacterCard = (character) => (
  <CharacterCard character={character} key={character.id} />
);

const CharactersResultsSection = ({ characters }) => {
  const charactersCards = characters.map(toCharacterCard);
  const hasCharacters = characters.length > 0;

  return hasCharacters ? (
    <section className="characters">{charactersCards}</section>
  ) : (
    <Message
      message="No se encontraron personajes. Verifica que tu búsqueda sea correcta."
      type="info"
    />
  );
};

CharactersResultsSection.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string }))
    .isRequired
};

export default CharactersResultsSection;
