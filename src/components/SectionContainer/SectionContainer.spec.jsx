import { screen } from "@testing-library/react";
import { SectionContainer } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<SectionContainer />", () => {
  it("Should render content", () => {
    const { container } = renderTheme(
      <SectionContainer>Children</SectionContainer>,
    );
    expect(screen.getByText("Children")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
