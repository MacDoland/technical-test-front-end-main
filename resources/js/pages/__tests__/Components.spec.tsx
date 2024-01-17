import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Components from "../Components";
import { CacheProvider, AsyncBoundary } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

describe("Components Component", () => {
  test("renders and displays expected component names", async () => {
    // Arrange

    // Act
    // TODO: Refactor below into a reusable render function that wraps tested component
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.components)}>
            <MockResolver fixtures={results.components}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <Components />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const componentA = await screen.getByText("Blade");
    const componentB = await screen.getByText("Rotor");
    const componentC = await screen.getByText("Hub");
    const turbines = await screen.getAllByText("Linen");

    // Assert
    expect(componentA).toBeInTheDocument();
    expect(componentB).toBeInTheDocument();
    expect(componentC).toBeInTheDocument();
    expect(turbines[0]).toBeInTheDocument();
    expect(turbines.length).toBe(3);
  });
});
