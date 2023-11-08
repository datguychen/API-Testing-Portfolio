import { test, expect } from '@playwright/test';
import { writeFile, readFile, unlink } from 'fs/promises';
import fs from 'fs';

test('Check_Api_Status_200_OK_Save_Result', async ({request}) => { // <-- request is a fixture
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);
  const jsonfilepath = './json-output/Check_Api_Status_200.json';

  const responseBodySaveToJson = JSON.stringify(response)
  fs.writeFileSync(jsonfilepath, responseBodySaveToJson);
});

test('Check_Api_Status_200_OK_Display_Result', async ({request}) => { // <-- request is a fixture
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);

  const responseBodyText = JSON.parse(await response.text()) // <-- store the body in JSON format
  console.log(responseBodyText);

  await expect(responseBodyText.data.id).toBe(2);
});

test('Check_Api_Status_204_No_Content', async ({request}) => {
  //DELETE information on the page
  const response = await request.delete('https://reqres.in/api/users/2', {
      data:{
          id: "1000",
      }
  });
  expect(response.status()).toBe(204);
});

test('Check_Api_Status_201_Created', async ({request}) => {
  const response = await request.post('https://reqres.in/api/user', {
      data: {
          id: 1000,
          name: "baus",
          job: "streamer"
      },
  });
  const responseBody = JSON.parse(await response.text());
  //console.log(responseBody);
  expect(responseBody.id).toBe(1000);
  expect(responseBody.createdAt).toBeTruthy();
});

test('Check_Api_Status_400_Bad_Request', async ({request}) => {
  const response = await request.post('https://reqres.in/api/login', {
    data: {
        email: "eve.holt2@reqres.in",
        password: "cityslicka"
    },
  });
  const responseBody = JSON.parse(await response.text());
  console.log(responseBody);
  expect(response.status()).toBe(400);
  expect(responseBody.token).toBeFalsy();
  expect(responseBody.error).toBe("user not found");
});

//401 TBD
// test('Check_Api_Status_401_Unauthorized', async ({request}) => {
//   const response = await request.get('https://naruto-arena.net/arena/selection');
//   expect(response.status()).toBe(400);
// });

test('Check_Api_Status_403_Forbidden', async ({request}) => {
  const response = await request.get('https://naruto-arena.net/arena/selection');
  expect(response.status()).toBe(403);
});

test('Check_NonExistent_Page_Api_Status_404_Not_Found', async ({request}) => { // <-- request is a fixture
  const response = await request.get("https://reqres.in/api/users/2nonexistent");
  expect(response.status()).toBe(404);
});



/*
Status_Codes.spec.ts
*/