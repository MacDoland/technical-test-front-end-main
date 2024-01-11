import { act, render, screen } from "@testing-library/react";
import axios from "axios";
import { farms } from "../../../../fixtures/farms.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Farms from "../Farms";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Farms Component", () => {
  test("renders and displays expected farm names", async () => {
    // Arrange
    mockedAxios.get.mockResolvedValueOnce({ data: farms });

    // Act
    await act(async () => {
      render(
        <BrowserRouter>
          <Farms />
        </BrowserRouter>,
      );
    });

    const farmA = await screen.getByText("West Viviannemouth");
    const farmB = await screen.getByText("Wehnertown");
    const farmC = await screen.getByText("Goodwinmouth");
    const farmD = await screen.getByText("Delfinaborough");
    const farmE = await screen.getByText("East Lonnyview");

    // Assert
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(farmA).toBeInTheDocument();
    expect(farmB).toBeInTheDocument();
    expect(farmC).toBeInTheDocument();
    expect(farmD).toBeInTheDocument();
    expect(farmE).toBeInTheDocument();
  });
});
