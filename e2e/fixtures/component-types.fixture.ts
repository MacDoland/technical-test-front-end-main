import type { Page } from "@playwright/test";

export class ComponentTypesPage {
  constructor(public readonly page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("http://localhost/");
    await this.page.getByRole("link", { name: "Component Types" }).click();
    await this.page.waitForURL("**/component-types");
    await this.page.waitForLoadState("load");
    await this.page.waitForSelector('h1:has-text("Component Types")');
  }
}
