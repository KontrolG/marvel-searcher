import { useHistory } from "react-router-dom";

const useRedirectTo = () => {
  const history = useHistory();

  const redirectTo = (route) => {
    const shouldRedirect = history.location.pathname !== route;
    if (shouldRedirect) {
      history.push(route);
    }
  };

  return redirectTo;
};

export default useRedirectTo;
