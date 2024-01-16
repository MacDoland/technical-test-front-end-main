import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "../layouts/Layout";
import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import { BrowserRouter } from "react-router-dom";

interface AuthSettings {
  authName: string;
  authType: string;
  cookieDomain: string;
  cookieSecure: boolean;
}

describe("Footer Component", () => {
  test("renders expected element", async () => {
    // Arrange
    const expectedText = "Hello World";
    const store = createStore<AuthSettings>({
      authName: "_auth",
      authType: "cookie",
      cookieDomain: "localhost",
      cookieSecure: window.location.protocol === "https:",
    });

    // Act
    render(
      <AuthProvider store={store}>
        <BrowserRouter>
          <Layout>{expectedText}</Layout>
        </BrowserRouter>
      </AuthProvider>,
    );
    const result = await screen.getByText(expectedText);

    // Assert
    expect(result).toBeInTheDocument();
  });
});
