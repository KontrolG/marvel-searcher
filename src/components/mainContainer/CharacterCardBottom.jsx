import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCharacterCardBottom = styled.div`
  padding: 1rem 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.19em;
  height: 27.5%;
  background-image: linear-gradient(transparent, 50%, rgba(0, 0, 0, 0.6));
  display: flex;
  align-items: flex-end;

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const CharacterCardBottom = ({ name }) => (
  <StyledCharacterCardBottom>
    <p>{name}</p>
  </StyledCharacterCardBottom>
);

CharacterCardBottom.defaultProps = {
  name: null
};

CharacterCardBottom.propTypes = {
  name: PropTypes.string
};

export default CharacterCardBottom;
