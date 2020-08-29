import { useState } from "react";

const useLoading = (defaultState = false) => {
  const [isLoading, setIsLoading] = useState(defaultState);

  const startLoading = () => setIsLoading(true);
  const finishLoading = () => setIsLoading(false);

  return [isLoading, startLoading, finishLoading];
};

export default useLoading;
