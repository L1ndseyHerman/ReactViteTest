import { test, expect } from "@playwright/test";

test.describe("App", () => {
  test("It shows the correct title", async ({ page }) => {
    await page.goto("http://localhost:5173/");

    await expect(page).toHaveTitle("react-vite-test");
  });
});
