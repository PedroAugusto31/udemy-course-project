import { screen } from "@testing-library/react";
import { Menu } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<Menu />", () => {
  it("Should do something", () => {
    renderTheme(<Menu>Children</Menu>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
