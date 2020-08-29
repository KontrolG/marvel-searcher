import React from "react";
import Card from "./Card/Card";
import CardImage from "./Card/CardImage";
import CardContent from "./Card/CardContent";
import thorImage from "../assets/img/thor-comic.jpg";
import CharacterCardTop from "./CharacterCardTop";
import CharacterCardBottom from "./CharacterCardBottom";

const CharacterCard = ({ character }) => {
  const { thumbnail, name } = character;
  const thumbnailsSrc = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Card className="character-card" component="figure">
      <CardImage src={thorImage} />
      <CardContent className="character-card__content" component="figcaption">
        <CharacterCardTop />
        <CharacterCardBottom name={name} />
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
