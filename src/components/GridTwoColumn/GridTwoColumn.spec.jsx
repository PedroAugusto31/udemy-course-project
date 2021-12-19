import { screen } from "@testing-library/react";
import { GridTwoColumns } from ".";
import { renderTheme } from "../../utils/renderTheme";
import mock from "./mock";

describe("<GridTwoColumns />", () => {
  it("Should match snapshot", () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
