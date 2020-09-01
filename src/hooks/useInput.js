import { useState } from "react";

const useInput = (defaultInputValue) => {
  const [inputValue, setInputValue] = useState(defaultInputValue);

  const changeInputValue = ({ target }) => {
    const targetInputValue = target.value;
    setInputValue(targetInputValue);
  };

  return [inputValue, changeInputValue];
};

export default useInput;
