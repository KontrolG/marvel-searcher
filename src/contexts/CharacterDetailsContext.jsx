import React, { createContext, useState } from "react";

const defaultState = {
  character: {
    name: null,
    description: null,
    comics: {
      items: []
    },
    thumbnail: {
      path: null,
      ext: null
    }
  },
  setCharacter: () => {}
};

const CharacterDetailsContext = createContext(defaultState);
