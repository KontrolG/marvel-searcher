import { useEffect } from "react";
import MarvelAPI from "../calls/MarvelAPI";
import useLoading from "./useLoading";
import { useCharactersSearchContext } from "../contexts/CharactersSearchContext";
import { useCharacterDetailsContext } from "../contexts/CharacterDetailsContext";

const useGetMarvelCharacterById = (characterId) => {
  const [isLoading, startLoading, finishLoading] = useLoading(true);
  const { character, setCharacter } = useCharacterDetailsContext();
  const { results } = useCharactersSearchContext();

  const changeCharacter = (character) => setCharacter(character);

  const loadCharacterComics = async (characterDetails) => {
    const comics = await MarvelAPI.getCharacterComics(characterId);
    return { ...characterDetails, comics };
  };

  const isTheSameCharacter = (resultsCharacter) =>
    characterId === resultsCharacter.id;

  const getCharacterFromResults = () => {
    if (results.length > 0) {
      return results.find(isTheSameCharacter);
    }
  };

  const loadCharacter = () => {
    const characterFromResults = getCharacterFromResults();
    if (!characterFromResults) {
      return MarvelAPI.getCharacterById(characterId);
    }
    return Promise.resolve(characterFromResults);
  };

  const unmountCharacter = () => setCharacter();

  useEffect(() => {
    startLoading();
    loadCharacter()
      .then(loadCharacterComics)
      .then(changeCharacter)
      .finally(finishLoading);

    return unmountCharacter;
  }, []);

  return [isLoading, character];
};

export default useGetMarvelCharacterById;
