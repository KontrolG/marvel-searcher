import React, { createContext, useState, useEffect, memo } from "react";

const defaultState = {
  characterNameQuery: "",
  setcharacterNameQuery: () => {},
  results: [],
  setResults: () => {},
  favoriteCharactersIds: []
};

const CharactersContext = createContext(defaultState);

const CharactersProvider = ({ children }) => {
  const [characterNameQuery, setCharacterNameQuery] = useState(
    defaultState.characterNameQuery
  );
  useEffect(() => console.log(characterNameQuery), [characterNameQuery]);
  const [results, setResults] = useState(defaultState.results);

  const contextValue = {
    characterNameQuery,
    setCharacterNameQuery,
    results,
    setResults
  };

  return (
    <CharactersContext.Provider value={contextValue}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContext;

const memoizedProvider = memo(CharactersProvider);

export { memoizedProvider as CharactersProvider };
