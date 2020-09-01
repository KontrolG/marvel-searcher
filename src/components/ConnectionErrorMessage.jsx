import React from "react";
import Message from "./Message";

const ConnectionErrorMessage = (props) => (
  <Message
    message="Ha ocurrido un error de conexión. Intenta de nuevo más tarde."
    type="connection-error"
  />
);

export default ConnectionErrorMessage;
