import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Icon from "./Icon";

const spinning = keyframes`
  to {
    transform: rotate(360deg);
  }`;

const StyledLoadingSpinner = styled.div`
  font-size: 4rem;
  color: inherit;
  align-self: center;
  display: flex;
  justify-content: center;

  i {
    animation: ${spinning} 2s infinite linear;
  }
`;

const LoadingSpinner = forwardRef(({ className }, ref) => (
  <StyledLoadingSpinner className={className} ref={ref}>
    <Icon name="spinner" />
  </StyledLoadingSpinner>
));

LoadingSpinner.defaultProps = {
  className: ""
};

LoadingSpinner.propTypes = {
  className: PropTypes.string
};

export default LoadingSpinner;
