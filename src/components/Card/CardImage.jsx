import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledCardImage = styled.img`
  width: 100%;
`;

const CardImage = forwardRef((props, ref) => <StyledCardImage ref={ref} {...props} />);

export default CardImage;
