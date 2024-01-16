import { test, expect } from "@playwright/test";
import { ComponentsPage } from "./fixtures/components.fixture";

const componentsTest = test.extend({
  componentsPage: async ({ page }, use) => {
    const componentsPage = new ComponentsPage(page);
    await use(componentsPage);
  },
});

componentsTest(
  "should navigate to component page when Components nav button is clicked",
  async ({ componentsPage, page }) => {
    // Arrange
    // Act
    await componentsPage.goTo();

    // Assert
    await expect(page).toHaveTitle("Components");
  },
);

componentsTest(
  "should navigate to component page when Components view button is clicked",
  async ({ componentsPage, page }) => {
    // Arrange
    await componentsPage.goTo();

    // Act
    await page.click('a[href="/components/1"]');

    // Assert
    await expect(page).toHaveTitle("Component");
  },
);
