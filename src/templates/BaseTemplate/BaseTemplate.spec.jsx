import { screen } from "@testing-library/react";
import { BaseTemplate } from ".";
import { renderTheme } from "../../utils/renderTheme";

import mock from "./mock";

describe("<BaseTemplate />", () => {
  it("Should render baseTemplate correctly", () => {
    const { container } = renderTheme(<BaseTemplate {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
