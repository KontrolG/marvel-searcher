import React from "react";
import Logo from "../shared/Logo";
import SearchForm from "./SearchForm";
import ToggleFavoriteButton from "../shared/ToggleFavoriteButton";
import useToggle from "../../hooks/useToggle";

const TopBar = (props) => {
  const [searchIsOpen, toggleSearchIsOpen] = useToggle(false);

  return (
    <header className={`top-bar ${searchIsOpen ? "search-open" : ""}`}>
      <Logo className={`top-bar__logo ${searchIsOpen ? "hidden" : ""}`} />
      <SearchForm
        toggleSearchIsOpen={toggleSearchIsOpen}
        searchIsOpen={searchIsOpen}
      />
      <ToggleFavoriteButton
        className="top-bar__toggle-favorites"
        title="Sólo mostrar personajes favoritos"
      />
    </header>
  );
};

export default TopBar;
