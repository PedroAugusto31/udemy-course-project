import { Heading } from "../../components/Heading";
import { mockBase } from "../BaseTemplate/stories";
import * as Styled from "./styles";
import { BaseTemplate } from "../BaseTemplate";

export function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="blue">
        <BaseTemplate {...mockBase} />
      </Styled.Wrapper>
    </div>
  );
}
