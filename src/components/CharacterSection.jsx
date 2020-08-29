import React from "react";
import CharacterCard from "./CharacterCard";

const toCharacterCard = (character) => (
  <CharacterCard character={character} key={character.id} />
);

const CharacterSection = ({ characters }) => {
  const charactersCards = characters.map(toCharacterCard);
  return <section className="characters">{charactersCards}</section>;
};

export default CharacterSection;
