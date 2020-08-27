import React from "react";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

const TopBar = (props) => {
  return (
    <header class="top-bar">
      <Logo />
      <SearchForm />
      <button class="top-bar__toggle-favorites icon-star-outline"></button>
    </header>
  );
};

export default TopBar;
