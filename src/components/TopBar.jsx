import React from "react";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Icon from "./Icon";

const TopBar = (props) => {
  return (
    <header className="top-bar">
      <Logo className="top-bar__logo" />
      <SearchForm />
      <button className="top-bar__toggle-favorites icon-star-outline">
        <Icon name="star-outline" />
      </button>
    </header>
  );
};

export default TopBar;
