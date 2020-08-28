import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledCardContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;

const CardContent = forwardRef(({ component, children, ...props }, ref) => {
  StyledCardContent.target = component;
  return (
    <StyledCardContent ref={ref} {...props}>
      {children}
    </StyledCardContent>
  );
});

CardContent.defaultProps = {
  component: "div"
};

export default CardContent;
