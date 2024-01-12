import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Farm from "../Farm";
import { AsyncBoundary, CacheProvider } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
}));

describe("Farm Component", () => {
  test("renders and displays expected farm name", async () => {
    // Arrange

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.farm)}>
            <MockResolver fixtures={results.farm}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <Farm />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const farmName = await screen.getByText("West Viviannemouth");

    // Assert
    expect(farmName).toBeInTheDocument();
  });
});
