const decodeSpecialCharacters = (string) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = string;
  return textarea.value;
};

export default decodeSpecialCharacters;
