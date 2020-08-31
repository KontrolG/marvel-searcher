import Axios from "axios";
import md5 from "md5";

const baseEndpoint = "https://gateway.marvel.com/v1/public";
const charactersEndpoint = `${baseEndpoint}/characters`;

const getAuthenticationParameters = () => {
  const privateKey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
  const publicKey = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey);
  return { ts: timestamp, apikey: publicKey, hash };
};

const requestToCharactersEndpoint = (params = {}, endpoint = "") => {
  const authenticationParams = getAuthenticationParameters();

  return Axios.get(charactersEndpoint + endpoint, {
    params: {
      ...authenticationParams,
      ...params
    }
  });
};

const getCharacters = () => requestToCharactersEndpoint();
const getCharacterByName = (name) => requestToCharactersEndpoint({ name });
const getCharacterById = (characterId) =>
  requestToCharactersEndpoint(null, `/${characterId}`);
const getCharacterComics = (characterId) =>
  requestToCharactersEndpoint(null, `/${characterId}/comics`);

const MarvelAPI = {
  getCharacters,
  getCharacterByName,
  getCharacterById,
  getCharacterComics
};

export default MarvelAPI;
