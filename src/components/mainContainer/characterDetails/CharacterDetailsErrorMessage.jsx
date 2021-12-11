import React from "react";
import PropTypes from "prop-types";
import CharacterNotFoundMessage from "./CharacterNotFoundMessage";
import ConnectionErrorMessage from "../../shared/ConnectionErrorMessage";

const CharacterDetailsErrorMessage = ({ error }) => {
  if (error.response && error.response.statusText === "Not Found") {
    return <CharacterNotFoundMessage />;
  }
  return <ConnectionErrorMessage />;
};

CharacterDetailsErrorMessage.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

export default CharacterDetailsErrorMessage;
