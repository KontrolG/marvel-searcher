import React, { createContext, useContext, memo } from "react";
import PropTypes from "prop-types";
import usePersistentState from "../hooks/usePersistentState";

const FavoritesCharactersContext = createContext();

const FavoritesCharactersProvider = ({ children }) => {
  const [favoritesCharacters, setFavoritesCharacters] = usePersistentState({
    name: "favorite-characters",
    defaultValue: []
  });

  const contextValue = {
    favoritesCharacters,
    setFavoritesCharacters
  };

  return (
    <FavoritesCharactersContext.Provider value={contextValue}>
      {children}
    </FavoritesCharactersContext.Provider>
  );
};

FavoritesCharactersProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export const useFavoritesCharacters = () => {
  const context = useContext(FavoritesCharactersContext);
  if (!context) {
    throw new Error(
      "useFavoritesCharacters must be used within a FavoritesCharactersProvider"
    );
  }
  return context;
};

const memoizedProvider = memo(FavoritesCharactersProvider);

export { memoizedProvider as FavoritesCharactersProvider };

export default FavoritesCharactersContext;
