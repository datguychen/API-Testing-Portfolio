import { test, expect } from '@playwright/test';
import { writeFile, readFile, unlink } from 'fs/promises';
import fs from 'fs';

test('Check_Api_Status_200', async ({request}) => { // <-- request is a fixture
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);
});

test('Check_NonExistent_Page_Api_Status_404', async ({request}) => { // <-- request is a fixture
  const response = await request.get("https://reqres.in/api/users/2nonexistent");
  expect(response.status()).toBe(404);
});

/*
Status_Code.spec.ts
*/