import React, { StrictMode } from "react";
import { HashRouter as Router } from "react-router-dom";
import TopBar from "./TopBar";
import MainContainer from "./MainContainer";
import { CharactersSearchProvider } from "../contexts/CharactersSearchContext";
import "../styles/App.scss";
import Footer from "./Footer";

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
