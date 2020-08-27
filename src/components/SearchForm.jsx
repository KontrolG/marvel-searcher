import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledInput = styled.input`
  border: none;
  padding: 0.25rem 0.5rem;
`;

const SearchForm = () => {
  return (
    <form className="top-bar__search" action="#">
      <Icon name="search" className="top-bar__search__icon" />
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
