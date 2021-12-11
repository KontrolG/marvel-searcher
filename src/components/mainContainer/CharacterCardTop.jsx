import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ToggleFavoriteButton from "../shared/ToggleFavoriteButton";
import useToggleCharacterFavorite from "../../hooks/useToggleCharacterFavorite";

const StyledCharacterCardTop = styled.div`
  padding: 0.75rem;
  height: 25%;
  background-image: linear-gradient(30deg, transparent 60%, rgba(0, 0, 0, 0.6));
  text-align: right;
  color: white !important;
`;

const CharacterCardTop = ({ character }) => {
  const [isFavorite, toggleFavorite] = useToggleCharacterFavorite(character);

  return (
    <StyledCharacterCardTop className="character-card__top">
      <ToggleFavoriteButton
        title="Añadir a personajes favoritos"
        isFavorite={isFavorite}
        onClick={toggleFavorite}
      />
    </StyledCharacterCardTop>
  );
};

const thumbnailShape = { path: PropTypes.string, ext: PropTypes.string };

const characterShape = {
  id: PropTypes.number,
  thumbnail: PropTypes.shape(thumbnailShape),
  name: PropTypes.string
};

CharacterCardTop.propTypes = {
  character: PropTypes.shape(characterShape).isRequired
};

export default CharacterCardTop;
