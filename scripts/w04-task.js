/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myprofile = {
    name: "Austin Styer",

    photo: "..w02-task\images\profile-image.jpg profile-image",

    favoriteFoods: [
        "Movie theatre popcorn",
        "Pizza",
        "Choclate Chip Cookies",
        "Carne Asada Quesadilla" 
    ],

    hobbies: [
        "Pickleball",
        "Reading",
        "Rock Climbing",
        "Running",
        "Napping",
        "Playing Board/Card Games"
    ],

    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myprofile.placesLived.push( 
    {
        place: 'Greensboro, NC',
        length: '1 year',
    }
);

myprofile.placesLived.push( 
    {
        place: "Louisville, Ky",
        length: '17 years',
    }
);
myprofile.placesLived.push( 
    {
        place: 'Los Angeles CA',
        length: '2 years',
    }
);

myprofile.placesLived.push( 
    {
        place: 'Rexburg, ID',
        length: '5 years'
    }
);



/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myprofile.name;

/* Photo with attributes */


/* Favorite Foods List*/

myprofile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myprofile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies; 
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

let placesLivedList = document.querySelector('#places-lived');

myprofile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    placesLivedList.appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    placesLivedList.appendChild(dd);})
