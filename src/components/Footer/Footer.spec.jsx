import { screen } from "@testing-library/react";
import { Footer } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<Footer />", () => {
  it("Should do something", () => {
    const { container } = renderTheme(<Footer html="<h1>olá</h1>" />);
    expect(screen.getByText("Children")).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot();
  });
});
