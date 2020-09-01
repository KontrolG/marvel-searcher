import React from "react";
import CharacterNotFoundMessage from "./CharacterNotFoundMessage";

const CharacterDetailsErrorMessage = ({ error }) => {
  if (error.response && error.response.statusText === "Not Found") {
    return <CharacterNotFoundMessage />;
  }
  return <ConnectionErrorMessage />;
};

export default CharacterDetailsErrorMessage;
