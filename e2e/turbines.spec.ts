import { test, expect } from "@playwright/test";
import { TurbinesPage } from "./fixtures/turbines.fixture";

const turbinesTest = test.extend({
  turbinesPage: async ({ page }, use) => {
    const turbinesPage = new TurbinesPage(page);
    await use(turbinesPage);
  },
});

turbinesTest(
  "should navigate to turbine page when Turbines nav button is clicked",
  async ({ turbinesPage, page }) => {
    // Arrange
    // Act
    await turbinesPage.goTo();

    // Assert
    await expect(page).toHaveTitle("Turbines");
  },
);

turbinesTest(
  "should navigate to turbine page when Turbines view button is clicked",
  async ({ turbinesPage, page }) => {
    // Arrange
    await turbinesPage.goTo();

    // Act
    await page.click('a[href="/turbines/1"]');

    // Assert
    await expect(page).toHaveTitle("Turbine");
  },
);
