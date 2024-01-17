import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Turbines from "../Turbines";
import { CacheProvider, AsyncBoundary } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

describe("Turbines Component", () => {
  test("renders and displays expected turbine names", async () => {
    // Arrange

    // Act
    // TODO: Refactor below into a reusable render function that wraps tested component
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.turbines)}>
            <MockResolver fixtures={results.turbines}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <Turbines />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const turbineA = await screen.getByText("Linen");
    const turbineB = await screen.getByText("Bisque");
    const turbineC = await screen.getByText("Red");
    const turbineD = await screen.getByText("PaleVioletRed");
    const turbineE = await screen.getByText("SandyBrown");

    // Assert
    expect(turbineA).toBeInTheDocument();
    expect(turbineB).toBeInTheDocument();
    expect(turbineC).toBeInTheDocument();
    expect(turbineD).toBeInTheDocument();
    expect(turbineE).toBeInTheDocument();
  });
});
