//Here I use PokeAPI to test the endpoints

import { test, expect } from '@playwright/test';
import { writeFile, readFile, unlink } from 'fs/promises';
import fs from 'fs';

test('Verify_Valid_Parameters_1', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/pokemon/gyarados');
        expect(response.status()).toBe(200);
        const responseBodyText = JSON.parse(await response.text()) // <-- store the body in JSON format
        await expect(responseBodyText.name).toBe("gyarados");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Valid_Parameters_2', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/move/tackle');
        expect(response.status()).toBe(200);
        const responseBodyText = JSON.parse(await response.text()) // <-- store the body in JSON format
        await expect(responseBodyText.name).toBe("tackle");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Invalid_Parameters_Basic', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/pokemon/gyarados2');
        expect(response.status()).toBe(404);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Invalid_Parameters_Basic_Uppercase', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/pokemon/GYARADOS');
        expect(response.status()).toBe(404);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Invalid_Parameters_Advanced', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/pokemon/gyarados!');
        expect(response.status()).toBe(404);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});



/*
Parameter_Validation.spec.ts
*/