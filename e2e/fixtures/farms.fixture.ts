import type { Page } from "@playwright/test";

export class FarmsPage {
  constructor(public readonly page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("http://localhost/");
    await this.page.getByRole("link", { name: "Farms" }).click();
    await this.page.waitForURL("**/farms");
    await this.page.waitForLoadState("load");
    await this.page.waitForSelector('h1:has-text("Farms")');
  }

  async goToFarm() {
    await this.goTo();
    await this.page.click('a[href="/farms/1"]');
    await this.page.waitForURL("**/farms/1");
    await this.page.waitForLoadState("load");
  }

  async goToFarmTurbines() {
    await this.goToFarm();
    await this.page.click('a[href="/farms/1/turbines/"]');
    await this.page.waitForURL("**/farms/1/turbines/");
    await this.page.waitForLoadState("load");
  }
}
