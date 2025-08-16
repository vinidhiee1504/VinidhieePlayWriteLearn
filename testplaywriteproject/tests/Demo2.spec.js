const { test, expect } = require("@playwright/test");

test("first Test for Assertion", async ({ page }) => {
  expect(200).toBe(200);
});

test("Second Test for Assertion", async ({ page }) => {
  expect(true).toBe(true);
});

test("Third Test for Assertion", async ({ page }) => {
  expect(10.75).toBe(10.75);
});

test("Fourth Test for Assertion", async ({ page }) => {
  expect("S G Software Testing Institute").toContain("Software");
});

test("Fifth Test for Assertion", async ({ page }) => {
  expect("Good Evening".includes("Evening")).toBeTruthy();
});

test("Six Test for Assertion", async ({ page }) => {
  expect(150).toBeGreaterThan(100);
});
