import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import Card from "./Card/Card";
import CardImage from "./Card/CardImage";
import CardContent from "./Card/CardContent";
import CharacterCardTop from "./CharacterCardTop";
import thorImage from "../assets/img/thor-comic.jpg";
import useGetMarvelCharacterById from "../hooks/useGetMarvelCharacterById";

const toListItem = ({ resourceURI, name }) => <li>{name}</li>;

const CharacterDetails = ({ match, ...props }) => {
  const characterId = match.params.id;
  const [isLoading, character] = useGetMarvelCharacterById(characterId);

  const { name, description, comics, thumbnail } = character;
  const comicsListItems = comics.items.map(toListItem);

  const thumbnailsSrc = `${thumbnail.path}.${thumbnail.extension}`;
  return isLoading ? (
    "Loading"
  ) : (
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

export default CharacterDetails;
