import { act, render, screen } from "@testing-library/react";
import axios from "axios";
import { farm } from "../../../../fixtures/farm.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Farm from "../Farm";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: 1,
  }),
  useRouteMatch: () => ({ url: "/company/company-id1/team/team-id1" }),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Farms Component", () => {
  test("renders and displays expected farm names", async () => {
    // Arrange
    mockedAxios.get.mockResolvedValueOnce({ data: farm });

    // Act
    await act(async () => {
      render(
        <BrowserRouter>
          <Farm />
        </BrowserRouter>,
      );
    });

    const farmName = await screen.getByText("West Viviannemouth");

    // Assert
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(farmName).toBeInTheDocument();
  });
});
