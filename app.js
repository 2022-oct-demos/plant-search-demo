/* Imports */

import { getAllPlants, getPlantsByType, getTypes } from './fetch-utils.js';
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

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    // find function that takes in the user data
    findPlants(formData.get('type'));
});

async function findPlants(type) {
    const response = await getPlantsByType(type);
    plants = response.data;
    displayPlants();
}

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
        const optionEl = renderType(sillyType);
        typeSelect.append(optionEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
