import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardImage = forwardRef(({ className, src, srcSet }, ref) => (
  <StyledCardImage ref={ref} className={className} src={src} srcSet={srcSet} />
));

CardImage.defaultProps = {
  className: "",
  srcSet: null
};

CardImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string
};

export default CardImage;
