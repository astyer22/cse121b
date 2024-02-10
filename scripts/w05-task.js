/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemple = (temples) => {
    temples.forEach((temples) => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent =temple.templeName;

        const img = document.createElement('img');
        img.src = temple.iamgeUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);

    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
    displayTemple(templeList);

}

/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */

displayTemple(templeList);
console.log(templeList);

