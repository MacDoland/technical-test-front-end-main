import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ComponentTypes from "../ComponentTypes";
import { CacheProvider, AsyncBoundary } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

describe("ComponentTypes Component", () => {
  test("renders and displays expected componentType names", async () => {
    // Arrange

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider
            initialState={mockInitialState(results.componentTypes)}>
            <MockResolver fixtures={results.componentTypes}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <ComponentTypes />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const componentTypeA = await screen.getByText("Blade");
    const componentTypeB = await screen.getByText("Rotor");
    const componentTypeC = await screen.getByText("Hub");

    // Assert
    expect(componentTypeA).toBeInTheDocument();
    expect(componentTypeB).toBeInTheDocument();
    expect(componentTypeC).toBeInTheDocument();
  });
});
