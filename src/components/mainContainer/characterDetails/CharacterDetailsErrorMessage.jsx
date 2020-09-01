import React from "react";
import CharacterNotFoundMessage from "./CharacterNotFoundMessage";
import ConnectionErrorMessage from "../../shared/ConnectionErrorMessage";

const CharacterDetailsErrorMessage = ({ error }) => {
  if (error.response && error.response.statusText === "Not Found") {
    return <CharacterNotFoundMessage />;
  }
  return <ConnectionErrorMessage />;
};

export default CharacterDetailsErrorMessage;
