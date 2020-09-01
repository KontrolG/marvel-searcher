const getThumbnailUrl = ({ path, extension }, type) => {
  if (type === "full") {
    return `${path}.${extension}`;
  }

  return `${path}/${type}.${extension}`;
};

export default getThumbnailUrl;
