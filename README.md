# Plan

## HTML

    - on load we will see...
        - form with a label, select, and button
        - headers
        - ul, with dynamically rendered individual list items

## State

    - plants array
    - types array

## Events

    - page load
        - display all plants
        - display all types in dropdown
    - form submit
        - use form data to filter plants

## Functions

    - fetch-utils: getAllPlants, getAllTypes, getPlantsByType
    - render-utils: renderPlant and renderType
    - displayPlants and displayTypes
    - findPlants(type)

### Slices

1. fetching plants from database - displaying on page
2. fetching types from database - displaying in dropdown
3. search by type and rendering only the matches on form submit
