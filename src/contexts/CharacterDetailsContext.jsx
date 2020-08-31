import React, { createContext, useState, useContext } from "react";

const defaultState = {
  character: {
    name: null,
    description: null,
    comics: [],
    thumbnail: {
      path: null,
      ext: null
    }
  },
  setCharacter: () => {}
};

const CharacterDetailsContext = createContext(defaultState);

const CharacterDetailsProvider = ({ children }) => {
  const [character, setCharacterValue] = useState(defaultState.character);

  const setCharacter = (character) => {
    const characterValue = character ? character : defaultState.character;
    setCharacterValue(characterValue);
  };

  const contextValue = { character, setCharacter };

  return (
    <CharacterDetailsContext.Provider value={contextValue}>
      {children}
    </CharacterDetailsContext.Provider>
  );
};

export default CharacterDetailsContext;

export const useCharacterDetailsContext = () =>
  useContext(CharacterDetailsContext);

export { CharacterDetailsProvider };
