import React from "react";
import CharacterCard from "../CharacterCard";
import Message from "../../shared/Message";

const toCharacterCard = (character) => (
  <CharacterCard character={character} key={character.id} />
);

const CharactersSection = ({ characters }) => {
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

export default CharactersSection;
