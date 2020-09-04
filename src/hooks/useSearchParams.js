import { useHistory } from "react-router-dom";
import getObjectFromEntries from "../utils/getObjectFromEntries";
import useRedirectTo from "./useRedirectTo";

const isNotEmpty = ([, value]) => Boolean(value);

const getOnlyNotEmptyParams = (params) => {
  const paramsEntries = Object.entries(params).filter(isNotEmpty);
  return getObjectFromEntries(paramsEntries);
};

function getSearchParamsString(params) {
  const onlyNotEmptyParams = getOnlyNotEmptyParams(params);
  const newSearchParams = new URLSearchParams(onlyNotEmptyParams);
  return newSearchParams.toString();
}

const useSearchParams = () => {
  const history = useHistory();
  const redirectTo = useRedirectTo();

  const searchParams = new URLSearchParams(history.location.search);

  const getSearchParams = () => {
    const searchParamsEntries = Array.from(searchParams.entries());
    return getObjectFromEntries(searchParamsEntries);
  };

  const changeSearchParams = (params) => {
    const searchParamsString = getSearchParamsString(params);
    const currentPathname = history.location.pathname;
    const newRoute = `${currentPathname}?${searchParamsString}`;
    redirectTo(newRoute);
  };

  return [getSearchParams, changeSearchParams];
};

export default useSearchParams;
