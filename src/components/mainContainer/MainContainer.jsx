import React from "react";
import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "../shared/ErrorBoundary";
import CharactersResults from "./charactersResults/CharactersResults";
import CharacterDetails from "./characterDetails/CharacterDetails";
import { CharacterDetailsProvider } from "../../contexts/CharacterDetailsContext";

const MainContainer = () => (
  <main className="main-container">
    <CharacterDetailsProvider>
      <ErrorBoundary>
        <Switch>
          <Route exac path="/characters/:id" component={CharacterDetails} />
          <Route exac path="/" component={CharactersResults} />
        </Switch>
      </ErrorBoundary>
    </CharacterDetailsProvider>
  </main>
);

export default MainContainer;
