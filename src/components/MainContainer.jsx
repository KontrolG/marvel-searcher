import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharactersResults from "./CharactersResults";
import CharacterDetails from "./CharacterDetails";

const MainContainer = () => {
  return (
    <main className="main-container">
      <Router>
        <Switch>
          <Route exac path="/characters/:id" component={CharacterDetails} />
          <Route exac path="/" component={CharactersResults} />
        </Switch>
      </Router>
    </main>
  );
};

export default MainContainer;
