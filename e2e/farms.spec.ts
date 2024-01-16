import { test, expect } from "@playwright/test";
import { FarmsPage } from "./fixtures/farms.fixture";

const farmsTest = test.extend({
  farmsPage: async ({ page }, use) => {
    const farmsPage = new FarmsPage(page);
    await use(farmsPage);
  },
});

farmsTest(
  "should navigate to farms page when Farms nav button is clicked",
  async ({ farmsPage, page }) => {
    // Arrange
    // Act
    await farmsPage.goTo();

    // Assert
    await expect(page).toHaveTitle("Farms");
  },
);

farmsTest(
  "should navigate to farm page when Farms view button is clicked",
  async ({ farmsPage, page }) => {
    // Arrange
    await farmsPage.goTo();

    // Act
    await page.click('a[href="/farms/1"]');

    // Assert
    await expect(page).toHaveTitle("Farm");
  },
);

farmsTest(
  "should navigate to farm turbines page when Farm view button is clicked",
  async ({ farmsPage, page }) => {
    // Arrange
    await farmsPage.goToFarm();

    // Act
    await page.click('a[href="/farms/1/turbines/"]');

    // Assert
    await expect(page).toHaveTitle("Turbines");
  },
);

farmsTest(
  "should navigate to farm turbine page when Farm turbines view button is clicked",
  async ({ farmsPage, page }) => {
    // Arrange
    await farmsPage.goToFarmTurbines();

    // Act
    await page.click('a[href="/farms/1/turbines/1"]');

    // Assert
    await expect(page).toHaveTitle("Farm Turbine");
  },
);
