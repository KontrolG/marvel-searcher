import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 2px 0px #aaa;
  position: relative;
  overflow: hidden;
`;

const Card = forwardRef(({ component, children, ...props }, ref) => {
  StyledCard.target = component;
  return (
    <StyledCard ref={ref} {...props}>
      {children}
    </StyledCard>
  );
});

Card.defaultProps = {
  component: "div",
};

export default Card;
