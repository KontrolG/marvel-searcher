import React from "react";
import PropTypes from "prop-types";
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
    {type ? <Icon name={type} size="4rem" /> : null}
    <p>{message}</p>
  </StyledMessage>
);

Message.defaultProps = {
  type: null
};

Message.propTypes = {
  message: PropTypes.node.isRequired,
  type: PropTypes.string
};

export default Message;
