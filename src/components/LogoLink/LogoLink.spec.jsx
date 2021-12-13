import { screen } from "@testing-library/react";
import { LogoLink } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<LogoLink />", () => {
  it("Should render text logo", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="olá, mundo" />,
    );
    expect(container).toBeInTheDocument();
  });
});
