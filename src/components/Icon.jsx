import styled from "styled-components";

const iconUnicodeCharacters = {
  none: "",
  cross: "e902",
  search: "e903",
  "star-outline": "e900",
  star: "e901",
  close: "e904",
  spinner: "e97c",
  "system-error": "e991",
  "arrow-left": "ea40",
  info: "ea0c",
  "connection-error": "e905"
};

const Icon = styled.i`
  font-family: "icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: ${({ size }) => size};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before {
    content: "\\${({ name }) => iconUnicodeCharacters[name] || ""}";
  }
`;

Icon.defaultProps = {
  name: "none",
  size: "1em"
};

export default Icon;
