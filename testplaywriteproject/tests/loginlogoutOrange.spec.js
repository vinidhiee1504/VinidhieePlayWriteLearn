const { test, expect } = require("@playwright/test");

test(" Login and Logout Functionality", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.waitForTimeout(3000);

  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("//button[normalize-space()='Login']").click();
  await expect(page).toHaveTitle("OrangeHRM");
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  await page.waitForTimeout(3000);
  await page.getByAltText("profile picture").first().click();
  await page.locator("//a[normalize-space()='Logout']").click();
  await page.waitForTimeout(3000);

  await expect(page).toHaveTitle("OrangeHRM");
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
