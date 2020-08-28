import React, { useContext, useState, useCallback } from "react";
import styled from "styled-components";
import Button from "./Button";
import CharactersContext from "../contexts/CharactersContext";

const StyledInput = styled.input`
  border: none;
  padding: 0.25rem 0.5rem;
`;

const SearchForm = () => {
  const { characterNameQuery, setCharacterNameQuery } = useContext(
    CharactersContext
  );
  const [inputValue, setInputValue] = useState(characterNameQuery);

  const changeInputValue = ({ target }) => {
    const inputValue = target.value;
    setInputValue(inputValue);
  };

  const changeCharacterNameQuery = useCallback(
    (event) => {
      event.preventDefault();
      setCharacterNameQuery(inputValue);
    },
    [inputValue]
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
