import React, { useContext, useEffect } from "react";
import CharacterSection from "./CharacterSection";
import CharactersContext from "../contexts/CharactersContext";
import fakeResponse from "../data/fakeResponse";

const MainContainer = (props) => {
  const { characterNameQuery, results, setResults } = useContext(
    CharactersContext
  );
  useEffect(() => {
    console.log(fakeResponse);
    if (fakeResponse.status === "Ok") {
      setResults(fakeResponse.data.results);
    }
  }, []);

  return (
    <main className="main-container">
      <CharacterSection characters={results} />
    </main>
  );
};

export default MainContainer;
