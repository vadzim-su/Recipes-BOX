import update from "immutability-helper";

const initialState = {
  recipes: [
    {
      id: 0,
      name: "Spaghetti Carbonara",
      url:
        "https://i.pinimg.com/736x/a0/a2/67/a0a267bf273edd2ba7b4a10e734614f9.jpg",
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
      url:
        "https://sun9-18.userapi.com/9ZNSGtOYJpQdCu558-k1uXYnFQ7jh47oGUli5w/UAzV-v6mmL4.jpg",
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
      name: "Cinnabon",
      url:
        "https://www.confettiandbliss.com/wp-content/uploads/2016/04/Cinnabon-Cinnamon-Rolls-Recipe.jpg",
      steps: [
        "1 cup warm milk (110 degrees F/45 degrees C)",
        "2 eggs, room temperature",
        "⅓ cup margarine, melted",
        "4 ½ cups bread flour",
        "1 teaspoon salt",
        "½ cup white sugar",
        "2 ½ teaspoons bread machine yeast",
        "1 cup brown sugar, packed",
        "2 ½ tablespoons ground cinnamon",
        "⅓ cup butter, softened",
        "1 (3 ounce) package cream cheese, softened",
        "¼ cup butter, softened",
        "1 ½ cups confectioners' sugar",
        "½ teaspoon vanilla extract",
        "⅛ teaspoon salt",
      ],
    },
    {
      id: 3,
      name: "Classic Caesar Salad",
      url:
        "https://assets.bonappetit.com/photos/57ae12ef53e63daf11a4e1d6/16:9/w_2560,c_limit/BA-best-classic-caeser-salad.jpg",
      steps: [
        "6 anchovy fillets packed in oil, drained",
        "1 small garlic clove",
        "Kosher salt",
        "2 large egg yolks",
        "2 tablespoons fresh lemon juice, plus more",
        "¾ teaspoon Dijon mustard",
        "2 tablespoons olive oil",
        "½ cup vegetable oil",
        "3 tablespoons finely grated Parmesan",
        "Freshly ground black pepper",
        '3 cups torn 1" pieces country bread, with crusts',
        "3 tablespoons olive oil",
        "3 romaine hearts, leaves separated",
        "Parmesan, for serving",
      ],
    },
  ],
  recipeName: "",
  recipeUrl: "",
  recipeSteps: [],
};

function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case "FORM/CHANGED_RECIPE_NAME":
      return update(state, { $merge: { recipeName: action.payload.value } });

    case "FORM/CHANGED_RECIPE_URL":
      return update(state, { $merge: { recipeUrl: action.payload.value } });

    case "FORM/CHANGED_RECIPE_STEPS":
      return update(state, { $merge: { recipeSteps: action.payload.value } });

    case "FORM/ADD_RECIPE":
      return update(state, {
        recipes: {
          $push: [
            {
              id: state.recipes.length,
              name: state.recipeName,
              url: state.recipeUrl,
              steps: [state.recipeSteps],
            },
          ],
        },
        $merge: {
          recipeName: initialState.recipeName,
          recipeUrl: initialState.recipeUrl,
          recipeSteps: initialState.recipeSteps,
        },
      });

    case "RECIPES/CLICKED_EDIT":
      return state;

    case "RECIPES/DELETE_ALL":
      console.log(state.recipes.length);
      console.log(123);
      return update(state, {
        recipes: { $splice: [[0, state.recipes.length]] },
      });

    case "RECIPES/CLICKED_DELETE":
      const fromState = state.recipes.slice();
      let currentRecipe = action.payload.id;
      let indexToRemove;

      fromState.forEach((item, index) => {
        if (item.id === currentRecipe) {
          indexToRemove = index;
        }
      });

      fromState.splice(indexToRemove, 1);

      return update(state, {
        $merge: {
          recipes: fromState,
        },
      });

    default:
      return state;
  }
}
export default recipesReducer;
