import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Card from "../shared/Card/Card";
import CardImage from "../shared/Card/CardImage";
import CardContent from "../shared/Card/CardContent";
import CharacterCardTop from "./CharacterCardTop";
import CharacterCardBottom from "./CharacterCardBottom";
import getThumbnailUrl from "../../utils/getThumbnailUrl";

const CharacterCard = ({ character }) => {
  const { id, thumbnail, name } = character;
  const thumbnailsSrc = getThumbnailUrl(thumbnail, "portrait_uncanny");

  return (
    <Card className="character-card" component="figure">
      <NavLink to={`/characters/${id}`} className="character-link">
        <CardImage src={thumbnailsSrc} />
      </NavLink>
      <CardContent className="character-card__content" component="figcaption">
        <CharacterCardTop />
        <CharacterCardBottom name={name} />
      </CardContent>
    </Card>
  );
};

const thumbnailShape = { path: PropTypes.string, ext: PropTypes.string };

const characterShape = {
  id: PropTypes.number,
  thumbnail: PropTypes.shape(thumbnailShape),
  name: PropTypes.string
};

CharacterCard.propTypes = {
  character: PropTypes.shape(characterShape).isRequired
};

export default CharacterCard;
