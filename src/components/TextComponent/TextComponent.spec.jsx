import { screen } from "@testing-library/react";
import { TextComponent } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<TextComponent />", () => {
  it("Should render a text", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
  it("Should match snapshot", () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <p
        class="c0"
      >
        Children
      </p>
    `);
  });
});
