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

  // saveRecipes() {
  //   const savedRecipes = this.getRecipes();
  //   if (savedRecipes) {
  //   }
  // }
}

export default new recipeService();
