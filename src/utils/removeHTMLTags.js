const removeHTMLTags = (string) => {
  const HTMLTagsRegularExpression = /(<([^>]+)>)/gi;
  return string.replace(HTMLTagsRegularExpression, "");
};

export default removeHTMLTags;
