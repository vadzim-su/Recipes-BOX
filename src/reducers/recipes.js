import update from "immutability-helper";

const initialState = {
  recipes: [],
  fetchErrorMessage: "",
};

function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case "RECIPES/FETCH_SUCCESSFULLY":
      return update(state, {
        $merge: {
          recipes: action.payload,
        },
      });

    case "RECIPES/DATA_ERROR":
      return update(state, {
        $merge: { fetchErrorMessage: action.payload.message },
      });

    // ==============================================

    case "RECIPES/ADD_NEW_RECIPE_SUCCESSFULLY": {
      const recipes = state.recipes.slice();
      recipes.push(action.payload);
      return { ...state, recipes };
    }

    // ==============================================

    case "RECIPES/DELETE_SINGLE_RECIPE_SUCCESSFULLY": {
      const recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload
      );
      return { ...state, recipes };
    }

    // ==============================================

    case "RECIPES/DELETE_ALL_RECIPES_SUCCESSFULLY": {
      return { ...state, recipes: [] };
    }

    // ==============================================

    case "RECIPES/EDIT_RECIPE_SUCCESSFULLY": {
      const recipes = state.recipes.slice();
      const editedIndex = recipes.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      recipes.splice(editedIndex, 1, action.payload);
      return { ...state, recipes };
    }

    // ==============================================

    default:
      return state;
  }
}
export default recipesReducer;
