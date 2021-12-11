import { screen } from "@testing-library/react";
import { Navlinks } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<Navlinks />", () => {
  it("Should do something", () => {
    renderTheme(<Navlinks>Children</Navlinks>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
