import React, { useState, useContext, useEffect } from "react";
import CharacterSection from "./CharacterSection";
import { useCharactersContext } from "../contexts/CharactersContext";
import useLoading from "../hooks/useLoading";
import LoadingSpinner from "./LoadingSpinner";
import MarvelAPI from "../calls/MarvelAPI";

const MainContainer = (props) => {
  const { characterNameQuery, results, setResults } = useCharactersContext();
  const [isLoading, startLoading, finishLoading] = useLoading(false);

  const changeResults = (response) => {
    const { status, data } = response.data;
    if (status === "Ok") {
      console.log(data.results);
      setResults(data.results);
    }
  };

  useEffect(() => {
    startLoading();
    MarvelAPI.getCharacters().then(changeResults).finally(finishLoading);
  }, []);

  useEffect(() => {
    if (characterNameQuery === "") return;
    startLoading();
    MarvelAPI.getCharacterByName(characterNameQuery)
      .then(changeResults)
      .finally(finishLoading);
  }, [characterNameQuery]);

  return (
    <main className="main-container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CharacterSection characters={results} />
      )}
    </main>
  );
};

export default MainContainer;
