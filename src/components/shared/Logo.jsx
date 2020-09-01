import React, { forwardRef } from "react";
import styled from "styled-components";
import logoSVG from "../../assets/img/MarvelLogo.svg";

const StyledImage = styled.img`
  width: ${({ width }) => width};
`;

const Logo = forwardRef((props, ref) => (
  <StyledImage src={logoSVG} alt="Marvel Logo" ref={ref} {...props} />
));

Logo.defaultProps = {
  width: "4.8rem"
};

export default Logo;
