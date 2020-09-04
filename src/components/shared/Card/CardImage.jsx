import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardImage = forwardRef(({ className }, ref) => (
  <StyledCardImage ref={ref} className={className} />
));

CardImage.defaultProps = {
  className: ""
};

CardImage.propTypes = {
  className: PropTypes.string
};

export default CardImage;
