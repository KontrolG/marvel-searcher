import decodeSpecialCharacters from "./decodeSpecialCharacters";
import removeHTMLTags from "./removeHTMLTags";
import limitString from "./limitString";

const getSanitizedDescription = (description) => {
  if (!description) {
    return "";
  }
  return decodeSpecialCharacters(removeHTMLTags(limitString(description, 80)));
};

export default getSanitizedDescription;
