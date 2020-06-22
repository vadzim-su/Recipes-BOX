const ALL_RECIPES = "LOCALSTORAGE_RECIPES";

class recipeService {
  constructor() {
    this.getRecipes = this.getRecipes.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.deleteSingleRecipe = this.deleteSingleRecipe.bind(this);
    this.deleteRecipes = this.deleteRecipes.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }

  getRecipes() {
    let localStorageRecipes = localStorage.getItem(ALL_RECIPES);
    let loadedRecipes = [];
    if (localStorageRecipes) {
      loadedRecipes = JSON.parse(localStorageRecipes);
    }
    return loadedRecipes || [];
  }

  addNewRecipe(newRecipeInfo) {
    let newRecipe;
    let savedRecipes = this.getRecipes();

    if (!savedRecipes) {
      throw { message: "Smth went wrong" };
    }

    newRecipe = { id: Date.now(), ...newRecipeInfo };
    savedRecipes.push(newRecipe);

    window.localStorage.setItem(ALL_RECIPES, JSON.stringify(savedRecipes));
    return savedRecipes;
  }

  deleteRecipes() {
    const savedRecipes = [];
    window.localStorage.setItem(ALL_RECIPES, JSON.stringify(savedRecipes));
    return savedRecipes;
  }

  deleteSingleRecipe(deletedRecipeId) {
    let savedRecipes = this.getRecipes();
    let indexToRemove;

    savedRecipes.forEach((item, index) => {
      if (item.id === deletedRecipeId) {
        indexToRemove = index;
      }
    });

    savedRecipes.splice(indexToRemove, 1);

    window.localStorage.setItem(ALL_RECIPES, JSON.stringify(savedRecipes));
    return savedRecipes;
  }

  editRecipe(editedRecipe) {
    let savedRecipes = this.getRecipes();
    const index = savedRecipes.findIndex(
      (recipe) => recipe.id === editedRecipe.id
    );

    savedRecipes.splice(index, 1, editedRecipe);
    window.localStorage.setItem(ALL_RECIPES, JSON.stringify(savedRecipes));

    return savedRecipes;
  }
}

export default new recipeService();
