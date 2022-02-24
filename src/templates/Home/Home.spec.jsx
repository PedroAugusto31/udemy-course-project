import { screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from ".";
import { theme } from "../../styles/theme";
import { renderTheme } from "../../utils/renderTheme";

describe("<Home />", () => {
  it("should render Home", () => {
    renderTheme(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>,
    );
  });
});
