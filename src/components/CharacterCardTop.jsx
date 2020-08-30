import React from "react";
import styled from "styled-components";
import ToggleFavoriteButton from "./ToggleFavoriteButton";

const StyledCharacterCardTop = styled.div`
  padding: 0.75rem;
  height: 25%;
  background-image: linear-gradient(30deg, transparent 60%, rgba(0, 0, 0, 0.6));
  text-align: right;
  color: white !important;
`;

const CharacterCardTop = (props) => (
  <StyledCharacterCardTop>
    <ToggleFavoriteButton title="Añadir a personajes favoritos" />
  </StyledCharacterCardTop>
);

export default CharacterCardTop;
