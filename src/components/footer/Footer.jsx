import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 0 1rem 1rem;
  text-align: center;
  color: #aaa;
`;

const Footer = (props) => (
  <StyledFooter>
    <a href="http://marvel.com" title="Marvel Homepage" target="_blank" rel="noreferrer">
      Data provided by Marvel. © 2020 MARVEL
    </a>
  </StyledFooter>
);

export default Footer;
