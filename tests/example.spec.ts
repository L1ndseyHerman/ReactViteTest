import { test, expect } from "@playwright/test";

test.describe("App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("It shows the correct title", async ({ page }) => {
    await expect(page).toHaveTitle("react-vite-test");
  });

  test("It shows the add movie button", async ({ page }) => {
    await expect(page.getByText("Add Movie")).toBeVisible();
  });

  test("It adds a new movie", async ({ page }) => {
    const input = page.getByPlaceholder("Enter movie name");
    await input.fill("Pulp fiction");

    await page.click("text=Add Movie");
    await expect(page.getByText("Pulp fiction")).toBeVisible();
  });

  test("It adds a new movie using Enter key", async ({ page }) => {
    const input = page.getByPlaceholder("Enter movie name");
    await input.fill("Saving Private Ryan");
    await input.press("Enter");

    await expect(page.getByText("Saving Private Ryan")).toBeVisible();
  });

  test("deletes a movie", async ({ page }) => {
    const input = page.getByPlaceholder("Enter movie name");
    await input.fill("The Shining");

    await page.click("text=Add Movie");

    const deleteButton = page.getByText("Delete").last();
    await deleteButton.click();

    await expect(page.getByText("The Shining")).not.toBeVisible();
  });
});
