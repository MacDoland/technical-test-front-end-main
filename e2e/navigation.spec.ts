import { test, expect } from "@playwright/test";

test.describe("Top Level Navagation", () => {
  test("should navigate to farms page when Farms NavBar link is clicked", async ({
    page,
  }) => {
    // Arrange
    await page.goto("http://localhost");
    await page.waitForLoadState("load", { timeout: 6000 });

    // Act
    await page.getByRole("link", { name: "Farms" }).click();
    await page.waitForURL("**/farms", { timeout: 6000 });
    const heading = page.locator("h1");

    // Assert
    await expect(heading).toHaveText("Farms");
  });

  test("should navigate to turbines page when Turbines NavBar link is clicked", async ({
    page,
  }) => {
    // Arrange
    await page.goto("http://localhost");
    await page.waitForLoadState("load", { timeout: 6000 });

    // Act
    await page.getByRole("link", { name: "Turbines" }).click();
    await page.waitForURL("**/turbines", { timeout: 6000 });
    const heading = page.locator("h1");

    // Assert
    await expect(heading).toHaveText("Turbines");
  });

  test("should navigate to components page when Components NavBar link is clicked", async ({
    page,
  }) => {
    // Arrange
    await page.goto("http://localhost");
    await page.waitForLoadState("load", { timeout: 6000 });

    const preheading = page.locator("h1");

    // Act
    await page.getByRole("link", { name: "Components" }).click();
    await page.waitForURL("**/components", { timeout: 6000 });
    await page.waitForLoadState("load", { timeout: 6000 });
    const heading = page.locator("h1");

    // Assert
    await expect(heading).toHaveText("Components");
  });

  test("should navigate to inspections page when Inspections NavBar link is clicked", async ({
    page,
  }) => {
    // Arrange
    await page.goto("http://localhost");
    await page.waitForLoadState("load", { timeout: 6000 });

    // Act
    await page.getByRole("link", { name: "Inspections" }).click();
    await page.waitForURL("**/inspections", { timeout: 6000 });
    await page.waitForLoadState("load", { timeout: 6000 });
    const heading = page.locator("h1");

    // Assert
    await expect(heading).toHaveText("Inspections");
  });

  test("should navigate to grades page when Grades NavBar link is clicked", async ({
    page,
  }) => {
    // Arrange
    await page.goto("http://localhost");
    await page.waitForLoadState("load", { timeout: 6000 });

    // Act
    await page.getByRole("link", { name: "Grades" }).click();
    await page.waitForURL("**/grades", { timeout: 6000 });
    await page.waitForLoadState("load", { timeout: 6000 });

    const heading = page.locator("h1");

    // Assert
    await expect(heading).toHaveText("Grades");
  });

  test("should navigate to component types page when Component Types NavBar link is clicked", async ({
    page,
  }) => {
    // Arrange
    await page.goto("http://localhost");
    await page.waitForLoadState("load", { timeout: 6000 });

    // Act
    await page.getByRole("link", { name: "Component Types" }).click();
    await page.waitForURL("**/component-types", { timeout: 6000 });
    await page.waitForLoadState("load", { timeout: 6000 });
    const heading = page.locator("h1");

    // Assert
    await expect(heading).toHaveText("Component Types");
  });

  test("should navigate to grade types page when Grade Types NavBar link is clicked", async ({
    page,
  }) => {
    // Arrange
    await page.goto("http://localhost");
    await page.waitForLoadState("load", { timeout: 6000 });

    // Act
    await page.getByRole("link", { name: "Grade Types" }).click();
    await page.waitForURL("**/grade-types", { timeout: 6000 });
    await page.waitForLoadState("load", { timeout: 6000 });
    const heading = page.locator("h1");

    // Assert
    await expect(heading).toHaveText("Grade Types");
  });
});
