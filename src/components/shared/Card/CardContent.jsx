import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;

const CardContent = forwardRef(({ component, children, className }, ref) => {
  StyledCardContent.target = component;
  return (
    <StyledCardContent ref={ref} className={className}>
      {children}
    </StyledCardContent>
  );
});

CardContent.defaultProps = {
  component: "div",
  className: "",
  children: null
};

CardContent.propTypes = {
  component: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardContent;
