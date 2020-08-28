import React, { forwardRef } from "react";
import styled from "styled-components";
import Icon from "./Icon";

const getBackgroundFromProps = ({ isFilled, isPrimary }) => {
  if (!isFilled) {
    return "none";
  }
  if (isPrimary) {
    return "red";
  }
};

const StyledButton = styled.button`
  background: ${getBackgroundFromProps};
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

const Button = forwardRef(({ icon, children, ...props }, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      {icon && <Icon {...icon} />}
      {children}
    </StyledButton>
  );
});

export default Button;
