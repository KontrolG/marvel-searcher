import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message";

const CharacterNotFoundMessage = () => {
  const message = (
    <Fragment>
      No se encontró el personaje. ¿Quieres regresar al{" "}
      <NavLink to="/" className="back-to-home-link">
        inicio
      </NavLink>
      ?
    </Fragment>
  );
  return <Message message={message} type="info" />;
};

export default CharacterNotFoundMessage;
