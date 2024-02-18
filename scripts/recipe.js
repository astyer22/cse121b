const recipes = [
    {
      "title": "Spaghetti Carbonara",
      "ingredients": ["spaghetti", "bacon", "eggs", "parmesan cheese", "black pepper"],
      "instructions": "Cook spaghetti according to package instructions. Meanwhile, fry bacon until crisp. Beat eggs with parmesan cheese and black pepper. Drain spaghetti, then toss with bacon and egg mixture. Serve immediately."
    },
    {
      "title": "Chicken Stir-Fry",
      "ingredients": ["chicken breast", "bell peppers", "broccoli", "soy sauce", "garlic", "ginger"],
      "instructions": "Cut chicken into strips and stir-fry until cooked through. Add sliced bell peppers, broccoli, garlic, and ginger. Stir in soy sauce and cook until vegetables are tender. Serve hot."
    },
    {
      "title": "Caprese Salad",
      "ingredients": ["tomatoes", "fresh mozzarella", "basil leaves", "olive oil", "balsamic vinegar", "salt", "black pepper"],
      "instructions": "Slice tomatoes and fresh mozzarella. Arrange on a plate with basil leaves. Drizzle with olive oil and balsamic vinegar. Season with salt and black pepper. Serve as a side dish or appetizer."
    }
  ];
  
  function searchRecipes(ingredient) {
    const results = recipes.filter(recipe => recipe.ingredients.includes(ingredient.toLowerCase()));
    displayRecipes(results);
  }
  
  function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = '';
  
    if (recipes.length === 0) {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'No recipes found.';
      recipesContainer.appendChild(noResultsMessage);
    } else {
      recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        
        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.title;
        
        const recipeIngredients = document.createElement('p');
        recipeIngredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;
  
        const recipeInstructions = document.createElement('p');
        recipeInstructions.textContent = `Instructions: ${recipe.instructions}`;
  
        recipeCard.appendChild(recipeTitle);
        recipeCard.appendChild(recipeIngredients);
        recipeCard.appendChild(recipeInstructions);
        
        recipesContainer.appendChild(recipeCard);
      });
    }
  }
  
  searchRecipes('');
  