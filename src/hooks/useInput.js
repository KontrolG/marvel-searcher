import { useState } from "react";

const useInput = (defaultInputValue) => {
  const [inputValue, setInputValue] = useState(defaultInputValue);

  const changeInputValue = ({ target }) => {
    const inputValue = target.value;
    setInputValue(inputValue);
  };

  return [inputValue, changeInputValue];
};

export default useInput;
