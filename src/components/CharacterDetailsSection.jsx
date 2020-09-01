import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CharacterNotFoundMessage from "./CharacterNotFoundMessage";
import Icon from "./Icon";
import Card from "./Card/Card";
import CardImage from "./Card/CardImage";
import CardContent from "./Card/CardContent";
import CharacterCardTop from "./CharacterCardTop";

const toListItem = ({ id, title, description, thumbnail, urls }) => {
  const link = urls[0] || "http://marvel.com/comics/";
  return <li key={id}>{title}</li>;
};

const CharacterDetailsSection = ({ character }) => {
  const { thumbnail, name, description, comics } = character;
  const hasValidCharacter = name !== "";
  if (!hasValidCharacter) {
    return <CharacterNotFoundMessage />;
  }

  // const { name, description, comics, thumbnail } = character;
  const thumbnailsSrc = `${thumbnail.path}/detail.${thumbnail.extension}`;
  const comicsListItems = comics.map(toListItem);

  return (
    <Fragment>
      <section className="character-details__return-button-wrapper">
        <NavLink to="/">
          <Icon name="arrow-left" />
        </NavLink>
      </section>
      <section className="character-details__thumbnail">
        <Card>
          <CardImage src={thumbnailsSrc} />
          <CardContent>
            <CharacterCardTop />
          </CardContent>
        </Card>
      </section>
      <div className="character-details__info">
        <header>
          <h2>{name}</h2>
          <p className="character-details__description">{description}</p>
        </header>
        <section>
          <h3>Comics</h3>
          <ul>{comicsListItems}</ul>
        </section>
      </div>
    </Fragment>
  );
};

export default CharacterDetailsSection;
