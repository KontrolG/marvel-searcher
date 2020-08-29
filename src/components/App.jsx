import React, { StrictMode } from "react";
import "../styles/App.scss";
import TopBar from "./TopBar";
import MainContainer from "./MainContainer";
import { CharactersSearchProvider } from "../contexts/CharactersSearchContext";

const App = () => {
  return (
    <StrictMode>
      <CharactersSearchProvider>
        <TopBar />
        <MainContainer />
      </CharactersSearchProvider>
    </StrictMode>
  );
};

export default App;
