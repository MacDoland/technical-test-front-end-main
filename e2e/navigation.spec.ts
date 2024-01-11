import { test, expect } from "@playwright/test";

test.describe("Navagation", () => {
  test("Should navigate to farms page when Farms link is clicked", async ({
    page,
  }) => {
    // Arrange
    await page.goto("http://localhost");

    // Act
    await page.getByText("Farms").click();
    await page.waitForURL("**/farms");
    const heading = page.locator("h1");

    // Assert
    await expect(heading).toHaveText("Farms");
  });
});
