import { screen } from "@testing-library/react";
import { Home } from ".";
import { theme } from "../../styles/theme";
import { renderTheme } from "../../utils/renderTheme";

describe("<Home />", () => {
  it("should render Home", () => {
    renderTheme(<Home />);
  });
});
