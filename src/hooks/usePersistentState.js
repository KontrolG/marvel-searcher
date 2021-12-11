import { useEffect, useState } from "react";

const defaultParams = {
  name: "key",
  storage: "local",
  defaultValue: ""
};

function usePersistentState(params = defaultParams) {
  const storage = params.storage === "session" ? sessionStorage : localStorage;

  const [state, setState] = useState(() => {
    const value = storage.getItem(params.name);
    return value ? JSON.parse(value) : params.defaultValue || null;
  });

  useEffect(() => {
    storage.setItem(params.name, JSON.stringify(state));
  }, [params.name, storage, state]);

  return [state, setState];
}

export default usePersistentState;
