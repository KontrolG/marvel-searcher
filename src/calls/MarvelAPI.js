import Axios from "axios";

const config = {};

const getCharacterByName = (name) =>
  Axios.get(`api/v1/public/characterByName?name=${name}` /* , config */);

const getCharacters = () =>
  Axios.get("api/v1/public/characters" /* , config */);

const MarvelAPI = {
  getCharacters,
  getCharacterByName
};

export default MarvelAPI;
