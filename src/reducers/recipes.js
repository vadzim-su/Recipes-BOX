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

    case "RECIPES/ADD_NEW_RECIPE_SUCCESSFULLY":
      return update(state, {
        $merge: {
          recipes: action.payload,
        },
      });

    // ==============================================

    case "RECIPES/DELETE_SINGLE_RECIPE_SUCCESSFULLY":
      return update(state, {
        $merge: {
          recipes: action.payload,
        },
      });

    // ==============================================

    case "RECIPES/DELETE_ALL_RECIPES_SUCCESSFULLY":
      return update(state, {
        $merge: {
          recipes: action.payload,
        },
      });

    // ==============================================

    case "RECIPES/EDIT_RECIPE_SUCCESSFULLY":
      return update(state, {
        $merge: {
          recipes: action.payload,
        },
      });

    // ==============================================

    default:
      return state;
  }
}
export default recipesReducer;
