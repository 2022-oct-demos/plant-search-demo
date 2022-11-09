/* Imports */

import { getAllPlants } from './fetch-utils.js';
import { renderPlant } from './render-utils.js';

/* Get DOM Elements */
const plantList = document.getElementById('plant-list');
const searchForm = document.getElementById('search-form');
const typeSelect = document.getElementById('type-select');

/* State */
let plants = [];

/* Events */

window.addEventListener('load', async () => {
    const response = await getAllPlants();
    plants = response.data;
    displayPlants();
});

/* Display Functions */
function displayPlants() {
    plantList.innerHTML = '';
    for (let item of plants) {
        const plantEl = renderPlant(item);
        plantList.append(plantEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
