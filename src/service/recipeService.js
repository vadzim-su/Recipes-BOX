const ALL_RECIPES = "LOCALSTORAGE_RECIPES";

class recipeService {
  getRecipes() {
    const localStorageRecipes = localStorage.getItem(ALL_RECIPES);
    let loadedRecipes = [];
    if (localStorageRecipes) {
      loadedRecipes = JSON.parse(localStorageRecipes);
    }
    return loadedRecipes;
  }

  addNewRecipe(newRecipeInfo) {
    let newRecipe;
    const savedRecipes = this.getRecipes();

    newRecipe = { id: Date.now(), ...newRecipeInfo };
    savedRecipes.push(newRecipe);

    window.localStorage.setItem(ALL_RECIPES, JSON.stringify(savedRecipes));
    return savedRecipes;
  }
}

export default new recipeService();
