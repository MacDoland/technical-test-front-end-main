import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { inspections } from "../../../../fixtures/Inspections.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Inspections from "../Inspections";
import useGetData from "../../hooks/useGetData";

jest.mock("../../hooks/useGetData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Inspections Component", () => {
  test("renders and displays expected farm names", async () => {
    // Arrange
    (useGetData as jest.Mock).mockReturnValue(inspections.data);

    // Act
    await act(async () => {
      render(
        <HelmetProvider>
          <BrowserRouter>
            <Inspections />
          </BrowserRouter>
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
