import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";
import useToggle from "../../hooks/useToggle";

const StyledToggleFavoriteButton = styled(Button)`
  font-size: 1.5rem;
  height: 2rem;
  padding: 0 0.25rem;
  outline: none;
  pointer-events: bounding-box;
`;

const ToggleFavoriteButton = forwardRef(({ className }, ref) => {
  const [isFavorite, toggleIsFavorite] = useToggle(false);

  const iconName = isFavorite ? "star" : "star-outline";

  return (
    <StyledToggleFavoriteButton
      icon={{ name: iconName }}
      ref={ref}
      className={className}
      onClick={toggleIsFavorite}
    />
  );
});

ToggleFavoriteButton.defaultProps = {
  className: ""
};

ToggleFavoriteButton.propTypes = {
  className: PropTypes.string
};

export default ToggleFavoriteButton;
