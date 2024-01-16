import { test, expect } from "@playwright/test";
import { GradesPage } from "./fixtures/grades.fixture";

const gradesTest = test.extend({
  gradesPage: async ({ page }, use) => {
    const gradesPage = new GradesPage(page);
    await use(gradesPage);
  },
});

gradesTest(
  "should navigate to grades page when Grades nav button is clicked",
  async ({ gradesPage, page }) => {
    // Arrange
    // Act
    await gradesPage.goTo();

    // Assert
    await expect(page).toHaveTitle("Grades");
  },
);

gradesTest(
  "should navigate to grade page when Grades view button is clicked",
  async ({ gradesPage, page }) => {
    // Arrange
    await gradesPage.goTo();

    // Act
    await page.click('a[href="/grades/1"]');

    // Assert
    await expect(page).toHaveTitle("Grade");
  },
);
