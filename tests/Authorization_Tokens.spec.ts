import { test, expect, Browser } from '@playwright/test';
import { writeFile, readFile, unlink } from 'fs/promises';
import { CookiesLogin } from '../Utils/CookiesLoginFunction';
import fs from 'fs';

test('Login_To_W3School_API', async ({ page, request }) => {
  const context = await page.context();
  await CookiesLogin(page, context);
});

test('Authorization_With_StorageState_W3School', async ({ browser }) => {
  const webContext = await browser.newContext({storageState:'./Utils/CookiesAccount/CookiesAccount.json'});
  const page = await webContext.newPage();
  const passwordInput = page.locator("#current-password").nth(0);

  await page.goto("https://profile.w3schools.com/", {waitUntil: 'load'});
  await expect(passwordInput).not.toBeVisible({timeout: 10000});
});

test('Authorization_With_Token_W3School_API', async ({ page, request }) => {
  const filePath = './Utils/CookiesAccount/CookiesAccount.json';
  const cookiesData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const accessTokenData = cookiesData.cookies.find(cookie => cookie.name === 'accessToken');
  const accessToken = accessTokenData.value;
  console.log(accessToken);

  const apiURL = "https://my-learning.w3schools.com/career-path/front-end-development";
  const responseWithToken = await request.post(apiURL, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  //TBD Playwright might not be able to handle this
});

/*
Authorization_Tokens.spec.ts
*/