import type { Page } from "@playwright/test";

export class ComponentsPage {
  constructor(public readonly page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("http://localhost/");
    await this.page.getByRole("link", { name: "Components" }).click();
    await this.page.waitForURL("**/components");
    await this.page.waitForLoadState("load");
    await this.page.waitForSelector('h1:has-text("Components")');
  }

  async goToComponent() {
    await this.goTo();
    await this.page.click('a[href="/components/1"]');
    await this.page.waitForURL("**/components/1");
    await this.page.waitForLoadState("load");
  }
}
