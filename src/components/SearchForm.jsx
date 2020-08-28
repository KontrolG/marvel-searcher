import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Button from "./Button";

const StyledInput = styled.input`
  border: none;
  padding: 0.25rem 0.5rem;
`;

const SearchForm = () => {
  return (
    <form className="top-bar__search" action="#">
      <Button
        className="top-bar__search__button"
        icon={{ name: "search", size: "1.25rem" }}
      />
      <StyledInput
        type="search"
        className="top-bar__search__input"
        name="search-superhero"
        id="search-superhero"
        placeholder="Buscar"
        title="Buscar personaje por su nombre"
      />
    </form>
  );
};

export default SearchForm;
