import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card/Card";
import CardImage from "./Card/CardImage";
import CardContent from "./Card/CardContent";
import thorImage from "../assets/img/thor-comic.jpg";
import CharacterCardTop from "./CharacterCardTop";
import CharacterCardBottom from "./CharacterCardBottom";

const CharacterCard = ({ character }) => {
  const { id, thumbnail, name } = character;
  const thumbnailsSrc = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

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
