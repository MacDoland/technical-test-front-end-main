import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import GradeTypes from "../GradeTypes";
import { CacheProvider, AsyncBoundary } from "@rest-hooks/react";
import { MockResolver, mockInitialState } from "@rest-hooks/test";
import results from "../../../../fixtures/fixtures";

describe("GradeTypes Grade", () => {
  test("renders and displays expected gradeType names", async () => {
    // Arrange

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <CacheProvider initialState={mockInitialState(results.gradeTypes)}>
            <MockResolver fixtures={results.gradeTypes}>
              <AsyncBoundary fallback="loading">
                <BrowserRouter>
                  <GradeTypes />
                </BrowserRouter>
              </AsyncBoundary>
            </MockResolver>
          </CacheProvider>
        </HelmetProvider>,
      );
    });

    const gradeTypeA = await screen.getByText("1");
    const gradeTypeB = await screen.getByText("2");
    const gradeTypeC = await screen.getByText("3");
    const gradeTypeD = await screen.getByText("4");
    const gradeTypeE = await screen.getByText("5");

    // Assert
    expect(gradeTypeA).toBeInTheDocument();
    expect(gradeTypeB).toBeInTheDocument();
    expect(gradeTypeC).toBeInTheDocument();
    expect(gradeTypeD).toBeInTheDocument();
    expect(gradeTypeE).toBeInTheDocument();
  });
});
