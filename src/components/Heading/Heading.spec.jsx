import { renderTheme } from "../../utils/renderTheme";
import { screen } from "@testing-library/react";
import { Heading } from ".";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
  it("should render Heading with default values", () => {
    const { debug } = renderTheme(<Heading>olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({
      color: theme.colors.mainColor,
      "font-size": theme.font.sizes.xhuge,
      "text-transform": "none",
    });
  });
  it("should render Heading on white theme", () => {
    renderTheme(<Heading isLight={true}>olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({
      color: theme.colors.blackTheme,
    });
  });
  it("should render Heading on small size", () => {
    renderTheme(<Heading size="small">olá</Heading>);

    const heading = screen.getByRole("heading", { name: "olá" });
    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });
  });
});
