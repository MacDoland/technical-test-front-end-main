import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("http://localhost");
    await page.waitForLoadState("load", { timeout: 6000 });
    await page.waitForSelector("h1");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("farms", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("http://localhost/farms");
    await page.waitForLoadState("load", { timeout: 6000 });
    await page.waitForSelector("h1");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("farm", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("http://localhost/farms/1");
    await page.waitForLoadState("load", { timeout: 6000 });
    await page.waitForSelector("h1");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("farm-turbines", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("http://localhost/farms/1/turbines");
    await page.waitForLoadState("load", { timeout: 6000 });
    await page.waitForSelector("h1");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("turbines", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("http://localhost/turbines");
    await page.waitForLoadState("load", { timeout: 6000 });
    await page.waitForSelector("h1");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
