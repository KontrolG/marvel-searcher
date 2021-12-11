import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CharacterNotFoundMessage from "./CharacterNotFoundMessage";
import Icon from "../../shared/Icon";
import Card from "../../shared/Card/Card";
import CardImage from "../../shared/Card/CardImage";
import CardContent from "../../shared/Card/CardContent";
import CharacterCardTop from "../CharacterCardTop";
import getThumbnailUrl from "../../../utils/getThumbnailUrl";
import CharacterDetailsComics from "./CharacterDetailsComics";

const CharacterDetailsSection = ({ character }) => {
  const { thumbnail, name, description, comics } = character;
  const hasValidCharacter = name !== "";
  if (!hasValidCharacter) {
    return <CharacterNotFoundMessage />;
  }

  const thumbnailsSrc = getThumbnailUrl(thumbnail, "detail");

  return (
    <>
      <section className="character-details__return-button-wrapper">
        <NavLink to="/">
          <Icon name="arrow-left" />
        </NavLink>
      </section>
      <section className="character-details__thumbnail">
        <Card>
          <CardImage src={thumbnailsSrc} />
          <CardContent>
            <CharacterCardTop character={character} />
          </CardContent>
        </Card>
      </section>
      <div className="character-details__info">
        <header>
          <h2>{name}</h2>
          <p className="character-details__description">{description}</p>
        </header>
        <CharacterDetailsComics comics={comics} />
      </div>
    </>
  );
};

const characterShape = {
  thumbnail: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
  comics: PropTypes.array
};

CharacterDetailsSection.propTypes = {
  character: PropTypes.shape(characterShape).isRequired
};

export default CharacterDetailsSection;
