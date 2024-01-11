import { render, screen } from "@testing-library/react";
import { farm } from "../../../../fixtures/farm.js";
import { turbines } from "../../../../fixtures/turbines.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Farm from "../Farm";
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

describe("Farm Component", () => {
  test("renders and displays expected farm name", async () => {
    // Arrange
    (useGetData as jest.Mock).mockImplementation((url: string) => {
      if (url === "/api/farms/1") {
        return farm.data;
      } else if (url === "/api/farms/1/turbines") {
        return turbines.data;
      }

      return { value: "Unknown API Resource" };
    });

    // Act
    render(
      <BrowserRouter>
        <Farm />
      </BrowserRouter>,
    );

    const farmName = await screen.getByText("West Viviannemouth");

    // Assert
    expect(farmName).toBeInTheDocument();
  });
});
