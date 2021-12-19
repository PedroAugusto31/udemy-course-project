import { screen } from "@testing-library/react";
import { GridContent } from ".";
import { renderTheme } from "../../utils/renderTheme";
import mockShow from "./mock";

describe("<GridContent />", () => {
  it("Should match snapshot", () => {
    const { container } = renderTheme(<GridContent {...mockShow} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
