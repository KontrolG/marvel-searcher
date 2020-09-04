import React from "react";
import { NavLink } from "react-router-dom";
import Message from "../../shared/Message";

const CharacterNotFoundMessage = () => {
  const message = (
    <>
      No se encontró el personaje. ¿Quieres regresar al
      {" "}
      <NavLink to="/" className="back-to-home-link">
        inicio
      </NavLink>
      ?
    </>
  );
  return <Message message={message} type="info" />;
};

export default CharacterNotFoundMessage;
