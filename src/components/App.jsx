import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "./topBar/TopBar";
import MainContainer from "./mainContainer/MainContainer";
import { CharactersSearchProvider } from "../contexts/CharactersSearchContext";
import "../styles/App.scss";
import Footer from "./footer/Footer";
import { FavoritesCharactersProvider } from "../contexts/FavoritesCharactersContext";

const App = () => (
  <StrictMode>
    <CharactersSearchProvider>
      <Router>
        <TopBar />
        <FavoritesCharactersProvider>
          <MainContainer />
        </FavoritesCharactersProvider>
      </Router>
    </CharactersSearchProvider>
    <Footer />
  </StrictMode>
);

export default App;
