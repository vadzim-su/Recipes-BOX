const ALL_RECIPES = "LOCALSTORAGE_RECIPES";
const url = "https://recipe-box-ec2cb.firebaseio.com/recipes.json";
const recipesURL = "https://recipe-box-ec2cb.firebaseio.com/recipes";

class recipeService {
  constructor() {
    this.getRecipes = this.getRecipes.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.deleteSingleRecipe = this.deleteSingleRecipe.bind(this);
    this.deleteRecipes = this.deleteRecipes.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }

  getRecipes() {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data) return [];
        const recipeArray = Object.entries(data);
        const recipes = recipeArray.map(([id, recipe]) => ({
          ...recipe,
          id,
        }));
        return recipes;
      });
  }

  addNewRecipe(newRecipeInfo) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(newRecipeInfo),
    })
      .then((res) => res.json())
      .then(({ name }) => ({ id: name, ...newRecipeInfo }));
  }

  deleteRecipes() {
    return fetch(url, {
      method: "DELETE",
    });
  }

  deleteSingleRecipe(id) {
    return fetch(`${recipesURL}/${id}.json`, {
      method: "DELETE",
    }).then(() => id);
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
