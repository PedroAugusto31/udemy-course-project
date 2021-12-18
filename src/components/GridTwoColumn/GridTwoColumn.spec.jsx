import { screen } from "@testing-library/react";
import { GridTwoColumns } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<GridTwoColumns />", () => {
  it("Should do something", () => {
    renderTheme(<GridTwoColumns>Children</GridTwoColumns>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
