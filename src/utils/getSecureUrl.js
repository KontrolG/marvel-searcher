const unsecureProtocol = "http://";
const secureProtocol = "https://";

const getSecureUrl = (url) => {
  if (isSecure(url)) {
    return url;
  }
  if (hasUnsecureProtocol(url)) {
    return getUrlWithReplacedProtocol(url);
  }
  return secureProtocol + url;
};

const isSecure = (url) => url.startsWith(secureProtocol);

const hasUnsecureProtocol = (url) => url.startsWith(unsecureProtocol);

const getUrlWithReplacedProtocol = (url) => url.replace(unsecureProtocol, secureProtocol);

export default getSecureUrl;
