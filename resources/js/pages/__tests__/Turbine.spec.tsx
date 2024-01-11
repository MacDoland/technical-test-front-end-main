import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { turbine } from "../../../../fixtures/turbine.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Turbine from "../Turbine";
import useGetData from "../../hooks/useGetData";

jest.mock("../../hooks/useGetData", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
}));

describe("Turbine Component", () => {
  test("renders and displays expected turbine name", async () => {
    // Arrange
    (useGetData as jest.Mock).mockReturnValue(turbine.data);

    // Act
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Turbine />
        </BrowserRouter>
      </HelmetProvider>,
    );

    const turbineName = await screen.getByText("Linen");

    // Assert
    expect(turbineName).toBeInTheDocument();
  });
});
