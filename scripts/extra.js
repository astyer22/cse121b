// Function to search for recipes based on user input
function searchRecipes() {
    // Spoonacular API key
    const apiKey = 'YOUR_API_KEY';
    // Get the user input (ingredients) from the input field and remove leading/trailing whitespace
    const ingredients = document.getElementById('search-input').value.trim();
  
    // Check if the input field is empty
    if (!ingredients) {
      // If empty, show an alert message and return without proceeding
      alert('Please enter some ingredients to search for recipes.');
      return;
    }
  
    // Construct the URL for fetching recipes from the Spoonacular API
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}&number=5`;
  
    // Fetch recipes from the Spoonacular API
    fetch(url)
      // Parse the response as JSON
      .then(response => {
        // Check if the response is successful (status code 200)
        if (!response.ok) {
          // If not successful, throw an error
          throw new Error('Network response was not ok');
        }
        // If successful, return the JSON data
        return response.json();
      })
      // Handle the JSON data
      .then(data => {
        // Call the displayRecipes() function to display the fetched recipes
        displayRecipes(data);
      })
      // Handle any errors that occur during the fetch operation
      .catch(error => {
        // Log the error to the console
        console.error('There was a problem with your fetch operation:', error);
      });
  }
  
  // Function to display the fetched recipes
  function displayRecipes(recipes) {
    // Get the container element where recipes will be displayed
    const recipesContainer = document.getElementById('recipes-container');
    // Clear any existing content in the container
    recipesContainer.innerHTML 
  