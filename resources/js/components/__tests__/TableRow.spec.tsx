import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonNavLink from "../ButtonNavLink";
import { BrowserRouter } from "react-router-dom";
import TableRow from "../TableRow";

describe("Table Component", () => {
  test("renders expected element", async () => {
    // Arrange
    const expectedText = "Hello World";
    const tableRowItem = {
      id: 0,
      display: <td>{expectedText}</td>,
    };

    // Act
    render(
      <BrowserRouter>
        <TableRow item={tableRowItem} />
      </BrowserRouter>,
    );
    const link = await screen.getByText(expectedText);

    // Assert
    expect(link).toBeInTheDocument();
  });
});
