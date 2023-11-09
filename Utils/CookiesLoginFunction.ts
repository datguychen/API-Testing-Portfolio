import { expect, Locator, Page } from '@playwright/test';
import { writeFile, readFile, unlink } from 'fs/promises';
import fs from 'fs';

export async function CookiesLogin(page, context){
  const emailInput = page.locator("#modalusername").nth(0);
  const passwordInput = page.locator("#current-password").nth(0);

  await page.goto("https://profile.w3schools.com/");
  await emailInput.click();
  await emailInput.fill("adam.tomasz.swiderski@gmail.com");
  await passwordInput.click();
  await passwordInput.fill("portfolioadamtest1W!");
  await page.keyboard.press("Enter");
  await expect(passwordInput).not.toBeVisible({timeout: 10000});

  await page.context().storageState({ path: './Utils/CookiesAccount/CookiesAccount.json' });
};