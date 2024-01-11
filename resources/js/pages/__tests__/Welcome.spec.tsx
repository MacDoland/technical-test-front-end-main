import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Welcome from "../Welcome";

describe("Welcome Component", () => {
  test("renders and displayers heading", async () => {
    // Arrange
    // Act
    render(<Welcome />);
    const h1 = await screen.getByRole("heading", { level: 1 });

    // Assert
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent("Welcome");
  });
});
