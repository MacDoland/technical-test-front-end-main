import { test, expect } from "@playwright/test";
import { ComponentTypesPage } from "./fixtures/component-types.fixture";

const componentTypesTest = test.extend({
  componentTypesPage: async ({ page }, use) => {
    const componentTypesPage = new ComponentTypesPage(page);
    await use(componentTypesPage);
  },
});

componentTypesTest(
  "should navigate to componentTypes page when Component Types nav button is clicked",
  async ({ componentTypesPage, page }) => {
    // Arrange
    // Act
    await componentTypesPage.goTo();

    // Assert
    await expect(page).toHaveTitle("Component Types");
  },
);

componentTypesTest(
  "should navigate to Component Type page when Component Types view button is clicked",
  async ({ componentTypesPage, page }) => {
    // Arrange
    await componentTypesPage.goTo();

    // Act
    await page.click('a[href="/component-types/1"]');

    // Assert
    await expect(page).toHaveTitle("Component Type");
  },
);
