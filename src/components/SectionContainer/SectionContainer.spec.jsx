import { screen } from "@testing-library/react";
import { SectionContainer } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<SectionContainer />", () => {
  it("Should do something", () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
