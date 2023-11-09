//I used Ajv library for response structure validation

import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

const berrySchema = {
    "type": "object",
    "properties": {
      "berries": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "url": { "type": "string" }
          },
          "required": ["name", "url"]
        }
      },
      "id": { "type": "integer" },
      "name": { "type": "string" },
      "names": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "language": { "type": "object" },
            "name": { "type": "string" }
          },
          "required": ["language", "name"]
        }
      }
    },
    "required": ["berries", "id", "name", "names"]
};

const encounterSchema = {
    "type": "object",
    "properties": {
      "id": { "type": "integer" },
      "name": { "type": "string" },
      "values": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "url": { "type": "string" }
          },
          "required": ["name", "url"]
        }
      },
      "names": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "language": {
              "type": "object",
              "properties": {
                "name": { "type": "string" },
                "url": { "type": "string" }
              },
              "required": ["name", "url"]
            }
          },
          "required": ["name", "language"]
        }
      }
    },
    "required": ["id", "name", "values", "names"]
};

test('Response_Structure_Validation_Berry', async ({request}) => { // <-- request is a fixture
    try {
        const ajv = new Ajv();
        const validate = ajv.compile(berrySchema);
        const response = await request.get('https://pokeapi.co/api/v2/berry-firmness/1');
        const responseBodyText = JSON.parse(await response.text()) // <-- store the body in JSON format
        const isValid = validate(responseBodyText);
        await expect(isValid).toBe(true);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

test('Response_Structure_Validation_Encounter', async ({request}) => { // <-- request is a fixture
    try {
        const ajv = new Ajv();
        const validate = ajv.compile(encounterSchema);
        const response = await request.get('https://pokeapi.co/api/v2/encounter-condition/1');
        const responseBodyText = JSON.parse(await response.text()) // <-- store the body in JSON format
        const isValid = validate(responseBodyText);
        await expect(isValid).toBe(true);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    };
});

/*
Response_Structure_Validation.spec.ts
*/