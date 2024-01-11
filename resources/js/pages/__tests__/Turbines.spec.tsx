import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { turbines } from "../../../../fixtures/turbines.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Turbines from "../Turbines";
import useGetData from "../../hooks/useGetData";

jest.mock("../../hooks/useGetData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Turbines Component", () => {
  test("renders and displays expected turbine names", async () => {
    // Arrange
    (useGetData as jest.Mock).mockReturnValue(turbines.data);

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Turbines />
          </BrowserRouter>
        </HelmetProvider>,
      );
    });

    const turbineA = await screen.getByText("Linen");
    const turbineB = await screen.getByText("Bisque");
    const turbineC = await screen.getByText("Red");

    // Assert
    expect(turbineA).toBeInTheDocument();
    expect(turbineB).toBeInTheDocument();
    expect(turbineC).toBeInTheDocument();
  });
});
