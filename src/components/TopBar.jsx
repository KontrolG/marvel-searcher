import React from "react";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import ToggleFavoriteButton from "./ToggleFavoriteButton";

const TopBar = (props) => {
  return (
    <header className="top-bar">
      <Logo className="top-bar__logo" />
      <SearchForm />
      <ToggleFavoriteButton className="top-bar__toggle-favorites" />
    </header>
  );
};

export default TopBar;
