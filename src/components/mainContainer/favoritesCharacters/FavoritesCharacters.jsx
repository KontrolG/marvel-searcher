import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useFavoritesCharacters } from "../../../contexts/FavoritesCharactersContext";
import Message from "../../shared/Message";
import CharactersResultsSection from "../charactersResults/CharactersResultsSection";

function FavoritesCharacters() {
  // To prevent characters from disappear when unlike it.
  const favoritesCharacters = useMemo(
    () => useFavoritesCharacters().favoritesCharacters,
    []
  );
  const hasCharacters = favoritesCharacters.length > 0;

  if (hasCharacters) {
    return <CharactersResultsSection characters={favoritesCharacters} />;
  }

  return (
    <Message
      message={(
        <>
          Aún no tienes personajes favoritos. ¿Quieres ver los
          {" "}
          <Link to="/" className="back-to-home-link">
            personajes disponibles
          </Link>
          ?
        </>
      )}
      type="info"
    />
  );
}

export default FavoritesCharacters;
