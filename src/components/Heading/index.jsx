import * as Styled from "./styles";
import P from "prop-types";

export function Heading({ children, light = false }) {
  return <Styled.Title light={light}>{children}</Styled.Title>;
}

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
