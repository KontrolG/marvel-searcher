import Axios from "axios";
import md5 from "md5";

const baseEndpoint = import.meta.env.VITE_MARVEL_API_BASE_URL;
const charactersEndpoint = `${baseEndpoint}/characters`;

const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;

const getAuthenticationParameters = () => {
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey);
  return { ts: timestamp, apikey: publicKey, hash };
};

const getResponseData = (response) => {
  const { status, data } = response.data;
  if (status === "Ok") {
    return data.results;
  }
};

const requestToCharactersEndpoint = (params = {}, endpoint = "") => {
  const url = charactersEndpoint + endpoint;
  const authenticationParams = getAuthenticationParameters();

  const parameters = {
    params: {
      ...authenticationParams,
      ...params
    }
  };

  return Axios.get(url, parameters).then(getResponseData);
};

const getCharacters = () => requestToCharactersEndpoint();
const getCharacterByName = (name) => requestToCharactersEndpoint({ name });
const getCharacterByNameStartsWith = (nameStartsWith) =>
  requestToCharactersEndpoint({ nameStartsWith });

const getCharacterFromData = ([character]) => character;
const getCharacterById = (characterId) =>
  requestToCharactersEndpoint(null, `/${characterId}`).then(
    getCharacterFromData
  );

const getCharacterComics = (characterId) =>
  requestToCharactersEndpoint(null, `/${characterId}/comics`);

const MarvelAPI = {
  getCharacters,
  getCharacterByName,
  getCharacterByNameStartsWith,
  getCharacterById,
  getCharacterComics
};

export default MarvelAPI;
