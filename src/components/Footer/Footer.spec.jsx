import { screen } from "@testing-library/react";
import { Footer } from ".";
import { renderTheme } from "../../utils/renderTheme";

describe("<Footer />", () => {
  it("Should do something", () => {
    const { container } = renderTheme(<Footer html="<h1>olá</h1>" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c2 {
        text-align: center;
      }

      .c2 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c0 {
        background: #FFFFFF;
        color: #0A1128;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      .c3 {
        font-size: 2.4rem;
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1"
          >
            <footer
              class="c2"
            >
              <div
                class="c1"
              >
                <div
                  class="c3"
                >
                  <h1>
                    olá
                  </h1>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    `);
  });
});
