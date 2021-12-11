import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 2px 0px #aaa;
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Card = forwardRef(
  ({ component, children, className, width, height }, ref) => {
    StyledCard.target = component;
    return (
      <StyledCard ref={ref} className={className} width={width} height={height}>
        {children}
      </StyledCard>
    );
  }
);

Card.defaultProps = {
  component: "div",
  width: "100%",
  height: "100%",
  children: null,
  className: ""
};

Card.propTypes = {
  component: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Card;
