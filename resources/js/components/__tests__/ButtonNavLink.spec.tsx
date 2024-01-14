import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonNavLink from "../ButtonNavLink";
import { BrowserRouter } from "react-router-dom";

describe("ButtonNavLink Component", () => {
  test("renders expected text", async () => {
    // Arrange
    const buttonText = "Click me!";
    // Act
    render(
      <BrowserRouter>
        <ButtonNavLink to="/test">{buttonText}</ButtonNavLink>
      </BrowserRouter>,
    );
    const link = await screen.getByText(buttonText);

    // Assert
    expect(link).toBeInTheDocument();
  });
});
