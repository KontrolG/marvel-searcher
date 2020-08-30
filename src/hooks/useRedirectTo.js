import { useHistory } from "react-router-dom";

const useRedirectTo = () => {
  const history = useHistory();

  const redirectTo = (route) => {
    const isInRoute = history.location.pathname === route;
    if (!isInRoute) {
      history.push(route);
    }
  };

  return redirectTo;
};

export default useRedirectTo;
