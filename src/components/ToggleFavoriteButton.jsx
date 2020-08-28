import React, { forwardRef } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledToggleFavoriteButton = styled(Button)`
  font-size: 1.5rem;
  height: 2rem;
  padding: 0 0.25rem;
`;

const ToggleFavoriteButton = forwardRef((props, ref) => {
  return (
    <StyledToggleFavoriteButton
      className="top-bar__toggle-favorites"
      icon={{ name: "star-outline" }}
      ref={ref}
    ></StyledToggleFavoriteButton>
  );
});

export default ToggleFavoriteButton;
