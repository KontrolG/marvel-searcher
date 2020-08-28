import React from "react";
import styled from "styled-components";

const StyledCharacterCardBottom = styled.div`
  padding: 1rem 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.19em;
  height: 27.5%;
  background-image: linear-gradient(transparent, 50%, rgba(0, 0, 0, 0.6));
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
`;

const CharacterCardBottom = (props) => {
  return (
    <StyledCharacterCardBottom>
      <p>Thor</p>
    </StyledCharacterCardBottom>
  );
};

export default CharacterCardBottom;
