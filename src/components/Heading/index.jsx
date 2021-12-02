import * as Styled from "./styles";
import P from "prop-types";

export function Heading({
  children,
  isLight = false,
  as = "h1",
  size = "big",
}) {
  return (
    <Styled.Title isLight={isLight} as={as} size={size}>
      {children}
    </Styled.Title>
  );
}

Heading.propTypes = {
  children: P.node.isRequired,
  isLight: P.bool.isRequired,
  as: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: P.oneOf(["small", "medium", "big", "huge"]),
};
