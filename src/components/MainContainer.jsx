import React from "react";
import { Switch, Route } from "react-router-dom";
import CharactersResults from "./CharactersResults";
import CharacterDetails from "./CharacterDetails";

const MainContainer = () => (
  <main className="main-container">
    <Switch>
      <Route exac path="/characters/:id" component={CharacterDetails} />
      <Route exac path="/" component={CharactersResults} />
    </Switch>
  </main>
);

export default MainContainer;
