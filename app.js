/* Imports */

import { getAllPlants, getTypes } from './fetch-utils.js';
import { renderPlant, renderType } from './render-utils.js';

/* Get DOM Elements */
const plantList = document.getElementById('plant-list');
const searchForm = document.getElementById('search-form');
const typeSelect = document.getElementById('type-select');

/* State */
let plants = [];
let types = [];

/* Events */

window.addEventListener('load', async () => {
    const response = await getAllPlants();
    plants = response.data;
    displayPlants();

    const typesResponse = await getTypes();
    types = typesResponse.data;
    displayTypes();
});

/* Display Functions */
function displayPlants() {
    plantList.innerHTML = '';
    for (let item of plants) {
        const plantEl = renderPlant(item);
        plantList.append(plantEl);
    }
}

function displayTypes() {
    for (let sillyType of types) {
        const option = renderType(sillyType);
        typeSelect.append(option);
    }
}

// (don't forget to call any display functions you want to run on page load!)
