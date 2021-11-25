import { screen } from "@testing-library/react";
import { Home } from ".";
import { theme } from "../../styles/theme";
import { renderTheme } from "../../utils/renderTheme";

describe("<Home />", () => {
  test("renders learn react link", () => {
    renderTheme(<Home />);
    //render(<Home />);
    // debug();

    const title = screen.getByRole("heading", { name: "hello" }).parentElement;
    expect(title).toHaveStyle({ background: theme.colors.blackTheme });
    expect(title).toMatchSnapshot();
  });
});
