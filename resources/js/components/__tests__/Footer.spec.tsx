import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer Component", () => {
  test("renders expected element", async () => {
    // Arrange
    const expectedText = "Hello World";

    // Act
    render(<Footer>{expectedText}</Footer>);
    const result = await screen.getByText(expectedText);

    // Assert
    expect(result).toBeInTheDocument();
  });
});
