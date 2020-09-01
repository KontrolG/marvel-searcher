import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledMessage = styled.div`
  max-width: 90ch;
  align-self: center;
  text-align: center;
  font-size: 1.25rem;

  p {
    margin-top: 1rem;
  }
`;

const Message = ({ message, type }) => (
  <StyledMessage>
    {type && <Icon name={type} size="4rem" />}
    <p>{message}</p>
  </StyledMessage>
);

export default Message;
