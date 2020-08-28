import React, { forwardRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import useToggle from "../hooks/useToggle";

const StyledToggleFavoriteButton = styled(Button)`
  font-size: 1.5rem;
  height: 2rem;
  padding: 0 0.25rem;
  outline: none;
`;

const ToggleFavoriteButton = forwardRef((props, ref) => {
  const [isFavorite, toggleIsFavorite] = useToggle(false);

  const iconName = isFavorite ? "star" : "star-outline";

  return (
    <StyledToggleFavoriteButton
      icon={{ name: iconName }}
      ref={ref}
      {...props}
      onClick={toggleIsFavorite}
    />
  );
});

export default ToggleFavoriteButton;
