import Axios from "axios";
import md5 from "md5";

const privateKey = process.env.MARVEL_API_PRIVATE_KEY;
const publicKey = process.env.MARVEL_API_PUBLIC_KEY;

const getAuthenticationParameters = () => {
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey);
  return { ts: timestamp, apikey: publicKey, hash };
};

const baseEndpoint = "https://gateway.marvel.com/v1/public";
const charactersEndpoint = `${baseEndpoint}/characters`;

const getCharacters = () => {
  const authenticationParams = getAuthenticationParameters();

  return Axios.get(charactersEndpoint, {
    params: authenticationParams
  });
};

const getCharacterByName = (name) => {
  const authenticationParams = getAuthenticationParameters();

  return Axios.get(charactersEndpoint, {
    params: {
      name,
      ...authenticationParams
    }
  });
};

const getCharacterById = (characterId) => {
  const authenticationParams = getAuthenticationParameters();

  return Axios.get(`${charactersEndpoint}/${characterId}`, {
    params: {
      ...authenticationParams
    }
  });
};

const MarvelAPI = {
  getCharacters,
  getCharacterByName,
  getCharacterById
};

export default MarvelAPI;
