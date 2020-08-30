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

const requestToCharactersEndpoint = (params = {}) => {
  const authenticationParams = getAuthenticationParameters();

  return Axios.get(charactersEndpoint, {
    params: {
      ...authenticationParams,
      ...params
    }
  });
};

const getCharacters = () => requestToCharactersEndpoint();
const getCharacterByName = (name) => requestToCharactersEndpoint({ name });

const getCharacterById = (characterId) => {
  const authenticationParams = getAuthenticationParameters();

  return Axios.get(`${charactersEndpoint}/${characterId}`, {
    params: authenticationParams
  });
};

const MarvelAPI = {
  getCharacters,
  getCharacterByName,
  getCharacterById
};

export default MarvelAPI;
