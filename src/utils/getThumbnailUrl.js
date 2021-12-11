import getSecureUrl from "./getSecureUrl";

const getThumbnailUrl = ({ path, extension }, type) => {
  let thumbnailPath;
  if (type === "full") {
    thumbnailPath = `${path}.${extension}`;
  }

  thumbnailPath = `${path}/${type}.${extension}`;

  return getSecureUrl(thumbnailPath);
};

export default getThumbnailUrl;
