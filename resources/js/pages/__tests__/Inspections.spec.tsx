import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Inspections from "../Inspections";
import { CacheProvider, AsyncBoundary } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

describe("Inspections Component", () => {
  test("renders and displays expected inspection names", async () => {
    // Arrange

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.inspections)}>
            <MockResolver fixtures={results.inspections}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <Inspections />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const inspectionA = await screen.getByText("2023-04-01 08:00:57");
    const inspectionB = await screen.getByText("2023-04-16 13:41:29");
    const inspectionC = await screen.getByText("2023-09-13 06:54:52");
    const inspectionD = await screen.getByText("2023-09-11 09:18:21");
    const inspectionE = await screen.getByText("2023-07-23 06:35:25");

    // Assert
    expect(inspectionA).toBeInTheDocument();
    expect(inspectionB).toBeInTheDocument();
    expect(inspectionC).toBeInTheDocument();
    expect(inspectionD).toBeInTheDocument();
    expect(inspectionE).toBeInTheDocument();
  });
});
