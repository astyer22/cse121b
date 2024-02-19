// Function to search recipes
function search() {
  const ingredients = getInputValue('#search-input');

  if (!ingredients) {
    alert('Please enter some ingredients to search for recipes.');
    return;
  }

  const url = `https://run.mocky.io/v3/b5e44d25-fc67-4241-9742-7798b89fe899`;

  fetch(url)
    .then(handleResponse)
    .then(data => filterAndDisplayRecipes(data, ingredients))
    .catch(handleError);
}

// Helper function to get input value
function getInputValue(selector) {
  return document.querySelector(selector).value.trim();
}

// Helper function to handle response
function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// Function to filter and display recipes
function filterAndDisplayRecipes(data, ingredients) {
  const filteredRecipes = data.filter(recipe => {
    const recipeIngredients = Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients;
    return recipeIngredients.toLowerCase().includes(ingredients.toLowerCase());
  });
  displayRecipes(filteredRecipes);
}

// Function to display recipes
function displayRecipes(recipes) {
  const container = document.getElementById('recipes-container');
  container.innerHTML = '';

  recipes.forEach(recipe => {
    const card = createRecipeCard(recipe);
    container.appendChild(card);
  });
}

// Function to create recipe card
function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.classList.add('recipe-card');

  const title = createElement('h2', recipe.title);
  const ingredients = createElement('p', `Ingredients: ${Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : 'N/A'}`);
  const instructions = createElement('p', `Instructions: ${recipe.instructions || 'N/A'}`);

  appendChildren(card, title, ingredients, instructions);
  return card;
}

// Helper function to create element
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

// Helper function to append children
function appendChildren(parent, ...children) {
  children.forEach(child => parent.appendChild(child));
}

// Function to handle errors
function handleError(error) {
  console.error('There was a problem with your fetch operation:', error);
}

// Function to clear search
function clearSearch() {
  setInputValue('#search-input', '');
  clearContainer('#recipes-container');
}

// Helper function to set input value
function setInputValue(selector, value) {
  document.querySelector(selector).value = value;
}

// Helper function to clear container
function clearContainer(selector) {
  document.querySelector(selector).innerHTML = '';
}

// Add event listener to search button
document.getElementById('search-button').addEventListener('click', search);

// Add event listener to clear button
document.getElementById('clear-button').addEventListener('click', clearSearch);
