import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import "@testing-library/jest-dom";
import Welcome from "../Welcome";

describe("Welcome Component", () => {
  test("renders and displayers heading", async () => {
    // Arrange
    // Act
    render(
      <HelmetProvider>
        <Welcome />
      </HelmetProvider>,
    );
    const h1 = await screen.getByRole("heading", { level: 1 });

    // Assert
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent("Welcome");
  });
});
