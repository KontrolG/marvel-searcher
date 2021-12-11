import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";

const StyledToggleFavoriteButton = styled(Button)`
  font-size: 1.5rem;
  height: 2rem;
  padding: 0 0.25rem;
  outline: none;
  pointer-events: bounding-box;
`;

const ToggleFavoriteButton = forwardRef(
  ({ className, isFavorite, onClick }, ref) => {
    const iconName = isFavorite ? "star" : "star-outline";

    return (
      <StyledToggleFavoriteButton
        icon={{ name: iconName }}
        ref={ref}
        className={className}
        onClick={onClick}
      />
    );
  }
);

ToggleFavoriteButton.defaultProps = {
  className: "",
  isFavorite: false,
  onClick: undefined
};

ToggleFavoriteButton.propTypes = {
  className: PropTypes.string,
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func
};

export default ToggleFavoriteButton;
