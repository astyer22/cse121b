
/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = '<strong>Austin Jay Styer</strong>';
let currentYear = '2024';
const profilePicture = 'images/profile-image.jpg';
let favDesert = 'cookies';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.getElementById('year') 
const imageElement = document.getElementById('picture') 


let favFood = ["pizza, movie theater popcorn, grilled cheese"]

/* Step 4 - Adding Content */
console.log(imageElement);

// Set the innerHTML properpty for the nameELement
nameElement.innerHTML = fullName;

// Set the content of foodElement to display my favorite foods
foodElement.innerHTML =  favFood.join(', ')


yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

// Adding array to the HTML display
foodElement.textContent += `<br>${favFood}`;

// modifyed to html display
console.log("My new favorite food list is :\n", favFood.join(','));

/* Step 5 - Array */



// Adding a new favorite food to the array
favFood.push(favDesert);

// Removing the first element in the favvorite array
favFood.shift();

// Remove the last element in the favorite food array.
favFood.pop();

console.log("My newest favorite foods list:\n", favFood.join(', '));

