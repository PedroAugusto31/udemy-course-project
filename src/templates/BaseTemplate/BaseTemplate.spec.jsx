import { screen } from "@testing-library/react";
import { BaseTemplate } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<BaseTemplate />", () => {
  it("Should do something", () => {
    renderTheme(<BaseTemplate>Children</BaseTemplate>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
