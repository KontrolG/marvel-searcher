import React from "react";
import { Link , useRouteMatch } from "react-router-dom";
import Logo from "../shared/Logo";
import SearchForm from "./SearchForm";
import ToggleFavoriteButton from "../shared/ToggleFavoriteButton";
import useToggle from "../../hooks/useToggle";
import { FAVORITES_CHARACTERS_PATH } from "../../constants/paths";


const TopBar = (props) => {
  const [searchIsOpen, toggleSearchIsOpen] = useToggle(false);
  const favoriteButtonIsActive = useRouteMatch(FAVORITES_CHARACTERS_PATH);

  return (
    <header className={`top-bar ${searchIsOpen ? "search-open" : ""}`}>
      <Link to="/" className={`top-bar__link ${searchIsOpen ? "hidden" : ""}`}>
        <Logo className="top-bar__logo" />
      </Link>
      <SearchForm
        toggleSearchIsOpen={toggleSearchIsOpen}
        searchIsOpen={searchIsOpen}
      />
      <Link to={FAVORITES_CHARACTERS_PATH}>
        <ToggleFavoriteButton
          isFavorite={favoriteButtonIsActive}
          className="top-bar__toggle-favorites"
          title="Sólo mostrar personajes favoritos"
        />
      </Link>
    </header>
  );
};

export default TopBar;
