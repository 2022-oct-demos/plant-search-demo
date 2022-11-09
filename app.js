/* Imports */

import { getAllPlants } from './fetch-utils.js';

/* Get DOM Elements */
const plantList = document.getElementById('plant-list');
const searchForm = document.getElementById('search-form');
const typeSelect = document.getElementById('type-select');

/* State */

/* Events */

window.addEventListener('load', async () => {
    await getAllPlants();
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
