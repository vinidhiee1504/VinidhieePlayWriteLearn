const { test, expect } = require("@playwright/test");

test("First PLaywright Test", async function display({ page }) {
  console.log("Running first Playwright test");
});

test("Second PLaywright Test", async function ({}) {
  console.log("Running second Playwright test");
});

test.only("Third PLaywright Test", async ({}) => {
  console.log("Running third Playwright test");
});
