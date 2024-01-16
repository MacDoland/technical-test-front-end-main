import type { Page } from "@playwright/test";

export class TurbinesPage {
  constructor(public readonly page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("http://localhost/");
    await this.page.getByRole("link", { name: "Turbines" }).click();
    await this.page.waitForURL("**/turbines");
    await this.page.waitForLoadState("load");
    await this.page.waitForSelector('h1:has-text("Turbines")');
  }
}
