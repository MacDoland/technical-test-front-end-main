import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table, { TableItem } from "../Table";
import { BrowserRouter } from "react-router-dom";

describe("Table Component", () => {
  test("renders and displays expected item names", async () => {
    // Arrange
    const items: TableItem[] = [
      {
        id: 0,
        display: <td>Example Item 1</td>,
      },
      {
        id: 1,
        display: <td>Example Item 2</td>,
      },
    ];

    // Act
    render(
      <BrowserRouter>
        <Table items={items} />
      </BrowserRouter>,
    );

    const listItemA = await screen.getByText("Example Item 1");
    const listItemB = await screen.getByText("Example Item 2");

    // Assert
    expect(listItemA).toBeInTheDocument();
    expect(listItemB).toBeInTheDocument();
  });

  test("renders and displays expected item links", async () => {
    // Arrange
    const items: TableItem[] = [
      {
        id: 0,
        display: <td>Example Item 1</td>,
      },
      {
        id: 1,
        display: <td>Example Item 2</td>,
      },
    ];

    // Act
    render(
      <BrowserRouter>
        <Table items={items} showLinks={true} childUrlName="example" />
      </BrowserRouter>,
    );

    const links = await screen.getAllByText("view");

    // Assert
    expect(links.length).toBe(2);
  });

  test("omits links when showLink is set to false", async () => {
    // Arrange
    const items: TableItem[] = [
      {
        id: 0,
        display: <td>Example Item 1</td>,
      },
      {
        id: 1,
        display: <td>Example Item 2</td>,
      },
    ];

    // Act
    render(
      <BrowserRouter>
        <Table items={items} showLinks={false} />
      </BrowserRouter>,
    );

    const links = await screen.queryAllByText("view");

    // Assert
    expect(links.length).toBe(0);
  });
});