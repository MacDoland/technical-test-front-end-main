import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Farms from "../Farms";
import { CacheProvider, AsyncBoundary } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

describe("Farms Component", () => {
  test("renders and displays expected farm names", async () => {
    // Arrange

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.full)}>
            <MockResolver fixtures={results.full}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <Farms />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const farmA = await screen.getByText("West Viviannemouth");
    const farmB = await screen.getByText("Wehnertown");
    const farmC = await screen.getByText("Goodwinmouth");
    const farmD = await screen.getByText("Delfinaborough");
    const farmE = await screen.getByText("East Lonnyview");

    // Assert
    expect(farmA).toBeInTheDocument();
    expect(farmB).toBeInTheDocument();
    expect(farmC).toBeInTheDocument();
    expect(farmD).toBeInTheDocument();
    expect(farmE).toBeInTheDocument();
  });
});
