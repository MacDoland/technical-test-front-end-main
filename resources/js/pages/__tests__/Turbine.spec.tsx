import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { turbine } from "../../../../fixtures/turbine.js";
import { components } from "../../../../fixtures/components.js";
import { componentTypes } from "../../../../fixtures/component-types.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Turbine from "../Turbine";
import useGetData from "../../hooks/useGetData";
import { WindFarmContext } from "../../providers/WindFarmProvider";
import { ComponentType, WindFarmContextType } from "../../types/types";

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
    (useGetData as jest.Mock).mockImplementation((url: string) => {
      if (url === "/api/turbines/1") {
        return turbine.data;
      } else if (url === "/api/turbines/1/components") {
        return components.data;
      }

      return { value: "Unknown API Resource" };
    });

    const context: WindFarmContextType = {
      componentTypes: componentTypes.data as ComponentType[],
      gradeTypes: [],
    };

    // Act
    render(
      <HelmetProvider>
        <WindFarmContext.Provider value={context}>
          <BrowserRouter>
            <Turbine />
          </BrowserRouter>
        </WindFarmContext.Provider>
      </HelmetProvider>,
    );

    const turbineName = await screen.getByText("Linen");

    // Assert
    expect(turbineName).toBeInTheDocument();
  });
});
