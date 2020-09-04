import React, { createRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import Button from "../shared/Button";
import { useCharactersSearchContext } from "../../contexts/CharactersSearchContext";
import useRedirectTo from "../../hooks/useRedirectTo";

const StyledInput = styled.input`
  border: none;
  padding: 0.25rem 0.5rem;
  outline: none;
`;

const SearchForm = ({ searchIsOpen, toggleSearchIsOpen }) => {
  const {
    characterNameQuery,
    setCharacterNameQuery
  } = useCharactersSearchContext();
  const [inputValue, changeInputValue] = useInput(characterNameQuery);
  const redirectTo = useRedirectTo();
  const inputRef = createRef();

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
    [inputValue]
  );

  const focusInput = () => {
    if (searchIsOpen) {
      inputRef.current.focus();
    }
  };

  useEffect(focusInput, [searchIsOpen]);

  const forceSearchIsOpen = () => {
    const shouldToggleSearchIsOpen = !searchIsOpen && characterNameQuery !== "";
    if (shouldToggleSearchIsOpen) {
      toggleSearchIsOpen();
    }
  };

  useEffect(forceSearchIsOpen, [characterNameQuery]);

  const closeSearch = useCallback(() => {
    const shouldToggleSearchIsOpen =
      searchIsOpen && inputValue === "" && characterNameQuery === "";
    if (shouldToggleSearchIsOpen) {
      toggleSearchIsOpen();
    }
  }, [searchIsOpen, inputValue, characterNameQuery]);

  return (
    <form className="top-bar__search" onSubmit={changeCharacterNameQuery}>
      <Button
        type="button"
        className="top-bar__search__button"
        icon={{ name: "search", size: "1.25rem" }}
        onClick={toggleSearchIsOpen}
      />
      <StyledInput
        type="search"
        className="top-bar__search__input"
        name="search-superhero"
        value={inputValue}
        onChange={changeInputValue}
        ref={inputRef}
        onBlur={closeSearch}
        id="search-superhero"
        placeholder="Buscar"
        title="Buscar personaje por su nombre"
      />
    </form>
  );
};

SearchForm.defaultProps = {
  searchIsOpen: false
};

SearchForm.propTypes = {
  searchIsOpen: PropTypes.bool,
  toggleSearchIsOpen: PropTypes.func.isRequired
};

export default SearchForm;
