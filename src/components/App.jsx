import React, { StrictMode } from "react";
import { HashRouter as Router } from "react-router-dom";
import TopBar from "./topBar/TopBar";
import MainContainer from "./mainContainer/MainContainer";
import { CharactersSearchProvider } from "../contexts/CharactersSearchContext";
import "../styles/App.scss";
import Footer from "./footer/Footer";

const App = () => (
  <StrictMode>
    <CharactersSearchProvider>
      <Router>
        <TopBar />
        <MainContainer />
      </Router>
    </CharactersSearchProvider>
    <Footer />
  </StrictMode>
);

export default App;
