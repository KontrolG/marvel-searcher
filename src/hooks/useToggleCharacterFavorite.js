import { useCallback } from "react";
import { useFavoritesCharacters } from "../contexts/FavoritesCharactersContext";

function useToggleCharacterFavorite(character) {
  const {
    favoritesCharacters,
    setFavoritesCharacters
  } = useFavoritesCharacters();

  const isFavorite =
    Array.isArray(favoritesCharacters) &&
    favoritesCharacters.some(({ id }) => character.id === id);

  const toggleFavorite = useCallback(() => {
    setFavoritesCharacters((currentFavoritesCharacters) =>
      isFavorite
        ? currentFavoritesCharacters.filter(({ id }) => character.id !== id)
        : [...currentFavoritesCharacters, character]
    );
  }, [isFavorite]);

  return [isFavorite, toggleFavorite];
}

export default useToggleCharacterFavorite;
