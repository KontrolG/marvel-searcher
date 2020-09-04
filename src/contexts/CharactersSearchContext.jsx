import React, { createContext, useState, useContext, memo } from "react";
import PropTypes from "prop-types";

const defaultState = {
  characterNameQuery: "",
  setcharacterNameQuery: () => {},
  results: [],
  setResults: () => {}
};

const CharactersSearchContext = createContext(defaultState);

const CharactersSearchProvider = ({ children }) => {
  const [characterNameQuery, setCharacterNameQuery] = useState(
    defaultState.characterNameQuery
  );
  const [results, setResults] = useState(defaultState.results);

  const contextValue = {
    characterNameQuery,
    setCharacterNameQuery,
    results,
    setResults
  };

  return (
    <CharactersSearchContext.Provider value={contextValue}>
      {children}
    </CharactersSearchContext.Provider>
  );
};

CharactersSearchProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default CharactersSearchContext;

export const useCharactersSearchContext = () => {
  const context = useContext(CharactersSearchContext);
  if (!context) {
    throw new Error(
      "useCharactersSearchContext must be used within a CharactersSearchProvider"
    );
  }
  return context;
};

const memoizedProvider = memo(CharactersSearchProvider);

export { memoizedProvider as CharactersSearchProvider };
