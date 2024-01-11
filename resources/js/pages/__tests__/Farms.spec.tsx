import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { farms } from "../../../../fixtures/farms.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Farms from "../Farms";
import useGetData from "../../hooks/useGetData";

jest.mock("../../hooks/useGetData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Farms Component", () => {
  test("renders and displays expected farm names", async () => {
    // Arrange
    (useGetData as jest.Mock).mockReturnValue(farms.data);

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Farms />
          </BrowserRouter>
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
