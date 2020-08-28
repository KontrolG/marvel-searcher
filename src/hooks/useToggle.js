import { useState } from "react";

const negateBoolean = (boolean) => !boolean;

const useToggle = (defaultState, onToggle) => {
  const [isToggled, setIsToggled] = useState(defaultState);

  const toggle = () => {
    setIsToggled(negateBoolean);
    if (typeof onToggle === "function") {
      onToggle(isToggled);
    }
  };

  return [isToggled, toggle];
};

export default useToggle;
