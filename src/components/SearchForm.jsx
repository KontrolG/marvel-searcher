import React from "react";

const SearchForm = () => {
  return (
    <form class="top-bar__search" action="#">
      <i class="icon-search top-bar__search__icon"></i>
      <input
        type="search"
        class="top-bar__search__input"
        name="search-superhero"
        id="search-superhero"
        placeholder="Buscar"
        title="Buscar personaje por su nombre"
      />
    </form>
  );
};

export default SearchForm;
