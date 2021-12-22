import P from "prop-types";
import * as Styled from "./styles";

export function GoTop({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

GoTop.propTypes = {
  children: P.node.isRequired,
};
