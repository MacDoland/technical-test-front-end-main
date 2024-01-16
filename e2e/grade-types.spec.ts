import { test, expect } from "@playwright/test";
import { GradeTypesPage } from "./fixtures/grade-types.fixture";

const gradeTypesTest = test.extend({
  gradeTypesPage: async ({ page }, use) => {
    const gradeTypesPage = new GradeTypesPage(page);
    await use(gradeTypesPage);
  },
});

gradeTypesTest(
  "should navigate to gradeTypes page when Component Types nav button is clicked",
  async ({ gradeTypesPage, page }) => {
    // Arrange
    // Act
    await gradeTypesPage.goTo();

    // Assert
    await expect(page).toHaveTitle("Grade Types");
  },
);

gradeTypesTest(
  "should navigate to grade page when Component Types view button is clicked",
  async ({ gradeTypesPage, page }) => {
    // Arrange
    await gradeTypesPage.goTo();

    // Act
    await page.click('a[href="/grade-types/1"]');

    // Assert
    await expect(page).toHaveTitle("Grade Type");
  },
);
