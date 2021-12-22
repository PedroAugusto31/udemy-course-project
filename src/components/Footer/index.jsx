import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { SectionContainer } from "../SectionContainer";
import { TextComponent } from "../TextComponent";

export function Footer({ html, background = false }) {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <SectionContainer>
          <TextComponent>{html}</TextComponent>
        </SectionContainer>
      </Styled.Container>
    </SectionBackground>
  );
}

Footer.propTypes = {
  html: P.string.isRequired,
  background: P.bool,
};
