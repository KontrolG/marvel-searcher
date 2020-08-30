import React, { forwardRef } from "react";
import PropTypes from "prop-types";
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

const Button = forwardRef((props, ref) => {
  const { className, onClick, icon, children } = props;
  return (
    <StyledButton ref={ref} className={className} onClick={onClick}>
      {icon && <Icon name={icon.name} size={icon.size} />}
      {children}
    </StyledButton>
  );
});

Button.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.string
  }),
  children: PropTypes.element
};
export default Button;
