import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

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

  const setCharacter = (newCharacter) => {
    const characterValue = newCharacter || defaultState.character;
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

CharacterDetailsProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export const useCharacterDetailsContext = () => {
  const context = useContext(CharacterDetailsContext);
  if (!context) {
    throw new Error(
      "useCharacterDetailsContext must be used within a CharacterDetailsProvider"
    );
  }
  return context;
};

export { CharacterDetailsProvider };
