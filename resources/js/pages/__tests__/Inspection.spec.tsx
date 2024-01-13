import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Inspection from "../Inspection";
import { AsyncBoundary, CacheProvider } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
}));

describe("Inspection Component", () => {
  test("renders and displays expected inspection name", async () => {
    // Arrange

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.inspection)}>
            <MockResolver fixtures={results.inspection}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <Inspection />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const inspectionName = await screen.getByText("West Viviannemouth");

    // Assert
    expect(inspectionName).toBeInTheDocument();
  });
});
