import update from "immutability-helper";

const initialState = {
  recipes: [
    {
      id: 0,
      name: "Spaghetti Carbonara",
      steps: [
        "100g pancetta",
        "50g pecorino cheese",
        "50g parmesan",
        "3 large eggs",
        "350g spaghetti",
        "2 plump garlic cloves, peeled and left whole",
        "50g unsalted butter",
        "sea salt and freshly grated black pepper",
      ],
    },
    {
      id: 1,
      name: "Classic Lasagna",
      steps: [
        "3/4 lb. lasagna noodles",
        "1 tsp. extra-virgin olive oil, plus more for drizzling",
        "2 lb. ground beef",
        "4 cloves garlic, minced",
        "2 tsp. dried oregano",
        "Kosher salt",
        "Freshly ground black pepper",
        "2 (32-0z.) jars marinara",
        "16 oz. whole milk ricotta",
        "1/2 c. freshly grated Parmesan, divided",
        "1/4 c. chopped parsley, plus more for garnish",
        "1 large egg",
        "2 lb. sliced mozzarella",
      ],
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      steps: [
        "100g pancetta",
        "50g pecorino cheese",
        "50g parmesan",
        "3 large eggs",
        "350g spaghetti",
        "2 plump garlic cloves, peeled and left whole",
        "50g unsalted butter",
        "sea salt and freshly grated black pepper",
      ],
    },
    {
      id: 3,
      name: "Classic Lasagna",
      steps: [
        "3/4 lb. lasagna noodles",
        "1 tsp. extra-virgin olive oil, plus more for drizzling",
        "2 lb. ground beef",
        "4 cloves garlic, minced",
        "2 tsp. dried oregano",
        "Kosher salt",
        "Freshly ground black pepper",
        "2 (32-0z.) jars marinara",
        "16 oz. whole milk ricotta",
        "1/2 c. freshly grated Parmesan, divided",
        "1/4 c. chopped parsley, plus more for garnish",
        "1 large egg",
        "2 lb. sliced mozzarella",
      ],
    },
  ],
  recipeName: "",
  recipeSteps: [],
};

function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case "FORM/CHANGED_RECIPE_NAME":
      return update(state, { $merge: { recipeName: action.payload.value } });

    case "FORM/CHANGED_RECIPE_STEPS":
      return update(state, { $merge: { recipeSteps: action.payload.value } });

    case "FORM/ADD_RECIPE":
      return state.recipes.push({
        id: state.recipes.length + 1,
        name: "123",
        steps: [],
      });

    case "RECIPES/CLICKED_DELETE":
      let currentRecipe = action.payload.id;

      // console.log(state.recipes[currentRecipe]);
      state.recipes.splice(currentRecipe, 1);
      console.log(state);
      // console.log(state.recipes);

      // state.recipes.splice(currentRecipe, 1);
      return state;

    default:
      return state;
  }
}
export default recipesReducer;
