import { test, expect } from "@playwright/test";
import { InspectionsPage } from "./fixtures/inspections.fixture";

const inspectionsTest = test.extend({
  inspectionsPage: async ({ page }, use) => {
    const inspectionsPage = new InspectionsPage(page);
    await use(inspectionsPage);
  },
});

inspectionsTest(
  "should navigate to inspections page when Inspections nav button is clicked",
  async ({ inspectionsPage, page }) => {
    // Arrange
    // Act
    await inspectionsPage.goTo();

    // Assert
    await expect(page).toHaveTitle("Inspections");
  },
);

inspectionsTest(
  "should navigate to inspection page when Inspections view button is clicked",
  async ({ inspectionsPage, page }) => {
    // Arrange
    await inspectionsPage.goTo();

    // Act
    await page.click('a[href="/inspections/1"]');

    // Assert
    await expect(page).toHaveTitle("Inspection");
  },
);
