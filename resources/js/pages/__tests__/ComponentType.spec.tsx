import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { CacheProvider, AsyncBoundary } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";
import ComponentType from "../ComponentType";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
}));

describe("ComponentType Component", () => {
  test("renders and displays expected componentType name", async () => {
    // Arrange

    // Act
    // TODO: Refactor below into a reusable render function that wraps tested component
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.componentType)}>
            <MockResolver fixtures={results.componentType}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <ComponentType />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const componentType = await screen.getByText("Blade");

    // Assert
    expect(componentType).toBeInTheDocument();
  });
});
