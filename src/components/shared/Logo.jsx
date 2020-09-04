import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import logoSVG from "../../assets/img/MarvelLogo.svg";

const StyledImage = styled.img`
  width: ${({ width }) => width};
`;

const Logo = forwardRef(({ className, width }, ref) => (
  <StyledImage
    src={logoSVG}
    alt="Marvel Logo"
    ref={ref}
    className={className}
    width={width}
  />
));

Logo.defaultProps = {
  className: "",
  width: "4.8rem"
};

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string
};

export default Logo;
