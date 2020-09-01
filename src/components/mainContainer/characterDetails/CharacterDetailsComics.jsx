import React from "react";
import ComicItem from "./ComicItem";

const toComicListItem = (comic) => (
  <li key={comic.id}>
    <ComicItem comic={comic} />
  </li>
);

const CharacterDetailsComics = ({ comics }) => {
  const comicsListItems = comics.length > 0 && comics.map(toComicListItem);

  return comicsListItems ? (
    <section>
      <h3>Comics</h3>
      <ul className="character-details__comics-list">{comicsListItems}</ul>
    </section>
  ) : (
    <p>No hay comics disponibles de este personaje.</p>
  );
};

export default CharacterDetailsComics;
