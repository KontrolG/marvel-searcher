import { useState, useContext, useEffect } from "react";
import useLoading from "./useLoading";

const useAPICalls = (APICalls, defaultIsLoadingState) => {
  const [isLoading, startLoading, finishLoading] = useLoading(
    defaultIsLoadingState
  );

  useEffect(() => {
    startLoading();
    Axios.get("api/v1/public/characters")
      .then(changeResults)
      .finally(finishLoading);
  }, []);

  useEffect(() => {
    if (characterNameQuery === "") return;
    startLoading();
    Axios.get("api/v1/public/characterByName")
      .then(changeResults)
      .finally(finishLoading);
  }, [characterNameQuery]);
};
