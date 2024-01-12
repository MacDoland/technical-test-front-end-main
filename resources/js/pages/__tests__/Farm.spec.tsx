import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { farm } from "../../../../fixtures/farm";
import Farm from "../Farm";
import { AsyncBoundary, CacheProvider } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

describe("Farm Component", () => {
  test("renders and displays expected farm name", async () => {
    // Arrange

    // Act
    render(
      <HelmetProvider>
        <CacheProvider initialState={mockInitialState(results.full)}>
          <MockResolver fixtures={results.full}>
            <AsyncBoundary fallback="loading">
              <BrowserRouter>
                <Farm />
              </BrowserRouter>
            </AsyncBoundary>
          </MockResolver>
        </CacheProvider>
      </HelmetProvider>,
    );

    const farmName = await screen.findByText("West Viviannemouth");

    // Assert
    expect(farmName).toBeInTheDocument();
  });
});
