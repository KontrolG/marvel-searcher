import React from "react";
import Card from "./Card/Card";
import CardImage from "./Card/CardImage";
import CardContent from "./Card/CardContent";
import thorImage from "../assets/img/thor-comic.jpg";
import CharacterCardTop from "./CharacterCardTop";
import CharacterCardBottom from "./CharacterCardBottom";

const CharacterCard = (props) => {
  return (
    <Card className="character-card" component="figure">
      <CardImage src={thorImage} />
      <CardContent className="character-card__content" component="figcaption">
        <CharacterCardTop />
        <CharacterCardBottom />
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
