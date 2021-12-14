import { screen } from "@testing-library/react";
import { SectionBackground } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<SectionBackground />", () => {
  it("Should do something", () => {
    renderTheme(<SectionBackground>Children</SectionBackground>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
