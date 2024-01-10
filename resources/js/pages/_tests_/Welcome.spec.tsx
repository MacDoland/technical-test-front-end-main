import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Welcome from "../Welcome";

describe("Welcome Component", () => {
  test("renders and displayers heading", async () => {
    // Arrange
    render(<Welcome />);

    // Act
    const h1 = await screen.getByRole("heading", { level: 1 });

    // Assert
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent("Welcome");
  });
});
