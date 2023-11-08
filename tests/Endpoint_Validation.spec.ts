//Here I use PokeAPI to test the endpoints

import { test, expect } from '@playwright/test';
import { writeFile, readFile, unlink } from 'fs/promises';
import fs from 'fs';

test('Verify_Pokemon_Endpoint', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/pokemon/1');
        expect(response.status()).toBe(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Ability_Endpoint', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/ability/1');
        expect(response.status()).toBe(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Type_Endpoint', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/type/1');
        expect(response.status()).toBe(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Move_Endpoint', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/move/1');
        expect(response.status()).toBe(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Species_Endpoint', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/pokemon-species/1');
        expect(response.status()).toBe(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Evolution_Endpoint', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/evolution-chain/1');
        expect(response.status()).toBe(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Verify_Berry_Endpoint', async ({request}) => { // <-- request is a fixture
    try {
        const response = await request.get('https://pokeapi.co/api/v2/berry/1');
        expect(response.status()).toBe(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});


/*
Endpoint_Validation.spec.ts
*/