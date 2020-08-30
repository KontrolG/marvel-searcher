import React, { useContext, useState, useCallback } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import Button from "./Button";
import { useCharactersSearchContext } from "../contexts/CharactersSearchContext";
import useRedirectTo from "../hooks/useRedirectTo";

const StyledInput = styled.input`
  border: none;
  padding: 0.25rem 0.5rem;
`;

const SearchForm = () => {
  const {
    characterNameQuery,
    setCharacterNameQuery,
  } = useCharactersSearchContext();
  const [inputValue, changeInputValue] = useInput(characterNameQuery);

  const redirectTo = useRedirectTo();

  const redirectToCharactersResults = () => {
    const charactersResultsRoute = "/";
    redirectTo(charactersResultsRoute);
  };

  const changeCharacterNameQuery = useCallback(
    (event) => {
      event.preventDefault();
      setCharacterNameQuery(inputValue);
      redirectToCharactersResults();
    },
    [inputValue],
  );

  return (
    <form className="top-bar__search" onSubmit={changeCharacterNameQuery}>
      <Button
        className="top-bar__search__button"
        icon={{ name: "search", size: "1.25rem" }}
      />
      <StyledInput
        type="search"
        className="top-bar__search__input"
        name="search-superhero"
        value={inputValue}
        onChange={changeInputValue}
        id="search-superhero"
        placeholder="Buscar"
        title="Buscar personaje por su nombre"
      />
    </form>
  );
};

export default SearchForm;
