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
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const data = await response.json();

        // Adjusting date format
        templeList = data.map(temple => ({
            ...temple,
            dedicatedDate: new Date(temple.dedicated.replace(/,/g, '')).getTime() // Removing commas and converting to milliseconds
        }));

        displayTemple(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
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
        case 'notutah':
            filteredTemples = templeList.filter(temp => !temp.location.includes('Utah'));
            break;
        case 'older':
            filteredTemples = templeList.filter(temp => temp.dedicatedDate < new Date(1950, 0, 1).getTime());
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
