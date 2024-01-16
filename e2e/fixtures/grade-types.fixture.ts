import type { Page } from "@playwright/test";

export class GradeTypesPage {
  constructor(public readonly page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("http://localhost/");
    await this.page.getByRole("link", { name: "Grade Types" }).click();
    await this.page.waitForURL("**/grade-types");
    await this.page.waitForLoadState("load");
    await this.page.waitForSelector('h1:has-text("Grade Types")');
  }
}
