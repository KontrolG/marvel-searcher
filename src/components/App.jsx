import React, { StrictMode } from "react";
import "../styles/App.scss";
import TopBar from "./TopBar";
import MainContainer from "./MainContainer";
import { CharactersProvider } from "../contexts/CharactersContext";

const App = () => {
  return (
    <StrictMode>
      <CharactersProvider>
        <TopBar />
        <MainContainer />
      </CharactersProvider>
    </StrictMode>
  );
};

export default App;
