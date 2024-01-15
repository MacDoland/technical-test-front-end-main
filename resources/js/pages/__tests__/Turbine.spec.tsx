import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Turbine from "../Turbine";
import { AsyncBoundary, CacheProvider } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

jest.mock("leaflet");
jest.mock("@react-three/drei", () => ({
  Environment: jest.fn(),
}));

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
}));

describe("Turbine Component", () => {
  test("renders and displays expected turbine name", async () => {
    // Arrange

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.turbine)}>
            <MockResolver fixtures={results.turbine}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <Turbine />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const turbineName = await screen.getByText("Linen");
    const componentAName = await screen.getByText("Blade");
    const componentBName = await screen.getByText("Rotor");
    const componentCName = await screen.getByText("Hub");

    // Assert
    expect(turbineName).toBeInTheDocument();
    expect(componentAName).toBeInTheDocument();
    expect(componentBName).toBeInTheDocument();
    expect(componentCName).toBeInTheDocument();
  });
});
