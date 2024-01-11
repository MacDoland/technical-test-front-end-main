import { act, render, screen } from "@testing-library/react";
import axios from "axios";
import { turbines } from "../../../../fixtures/turbines.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Turbines from "../Turbines";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Turbines Component", () => {
  test("renders and displays expected turbine names", async () => {
    // Arrange
    mockedAxios.get.mockResolvedValueOnce({ data: turbines });

    // Act
    await act(async () => {
      render(
        <BrowserRouter>
          <Turbines />
        </BrowserRouter>,
      );
    });

    const turbineA = await screen.getByText("Linen");
    const turbineB = await screen.getByText("Bisque");
    const turbineC = await screen.getByText("Red");

    // Assert
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(turbineA).toBeInTheDocument();
    expect(turbineB).toBeInTheDocument();
    expect(turbineC).toBeInTheDocument();
  });
});
