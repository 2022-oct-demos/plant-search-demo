export function renderPlant(booger) {
    const li = document.createElement('li');
    li.classList.add('card');
    li.textContent = booger.Common_Name;

    const typeEl = document.createElement('p');
    typeEl.textContent = booger.Plant_Type;

    const lightEl = document.createElement('p');
    lightEl.textContent = booger.Suitable_Site_Conditions;

    li.append(typeEl, lightEl);

    return li;
}

export function renderType(plantType) {
    const option = document.createElement('option');
    option.value = plantType.name;
    option.textContent = plantType.name;
    return option;
}
