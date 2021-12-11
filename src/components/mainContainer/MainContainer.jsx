import React from "react";
import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "../shared/ErrorBoundary";
import CharactersResults from "./charactersResults/CharactersResults";
import CharacterDetails from "./characterDetails/CharacterDetails";
import { CharacterDetailsProvider } from "../../contexts/CharacterDetailsContext";
import { FAVORITES_CHARACTERS_PATH } from "../../constants/paths";
import FavoritesCharacters from "./favoritesCharacters/FavoritesCharacters";

const MainContainer = () => (
  <main className="main-container">
    <CharacterDetailsProvider>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/characters/:id" component={CharacterDetails} />
          <Route
            exact
            path={FAVORITES_CHARACTERS_PATH}
            component={FavoritesCharacters}
          />
          <Route exact path="/" component={CharactersResults} />
        </Switch>
      </ErrorBoundary>
    </CharacterDetailsProvider>
  </main>
);

export default MainContainer;
