/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemple Function */
const displayTemple = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.src = temple.imageUrl; // Corrected typo here
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
    displayTemple(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Corrected typo here and removed unnecessary variable redeclaration
};

/* filterTemples Function */
const filterTemples = () => {
    reset();
    const filter = document.getElementById('filtered').value;

    let filteredTemples = [];

    switch (filter) {
        case 'utah':
            filteredTemples = templeList.filter(temp => temp.location.includes('Utah'));
            break;
        case 'nonutah':
            filteredTemples = templeList.filter(temp => !temp.location.includes('Utah'));
            break;
        case 'older':
            filteredTemples = templeList.filter(temp => new Date(temp.dedicatedDate) < new Date(1950, 0, 1));
            break;
        case 'all':
            filteredTemples = templeList;
            break;
        default:
            console.log('Unknown filter option');
    }

    displayTemple(filteredTemples);
};

/* Event Listener */
document.querySelector("#filtered").addEventListener('change', filterTemples);

getTemples();
