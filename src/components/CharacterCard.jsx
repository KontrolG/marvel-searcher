import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card/Card";
import CardImage from "./Card/CardImage";
import CardContent from "./Card/CardContent";
import CharacterCardTop from "./CharacterCardTop";
import CharacterCardBottom from "./CharacterCardBottom";
import getThumbnailUrl from "../utils/getThumbnailUrl";

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

export default CharacterCard;
