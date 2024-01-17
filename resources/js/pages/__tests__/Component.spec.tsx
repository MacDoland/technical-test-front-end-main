import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Component from "../Component";
import { AsyncBoundary, CacheProvider } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
}));

describe("Component Component", () => {
  test("renders and displays expected component name", async () => {
    // Arrange

    // Act
    // TODO: Refactor below into a reusable render function that wraps tested component
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.component)}>
            <MockResolver fixtures={results.component}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <Component />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const component = await screen.getByText("Blade");
    const turbine = await screen.getByText("Linen");

    // Assert
    expect(component).toBeInTheDocument();
    expect(turbine).toBeInTheDocument();
  });
});
