import { call, put, takeLatest, all, select } from "redux-saga/effects";

import recipeService from "./../service/recipeService";

function* fetchRecipes() {
  try {
    let recipes = yield call(recipeService.getRecipes);
    yield put({ type: "RECIPES/FETCH_SUCCESSFULLY", payload: { recipes } });
  } catch ({ message }) {
    alert(message);
    yield put({ type: "RECIPES/FETCH_ERROR", payload: { message } });
  }
}

function* addRecipe(action) {
  try {
    let recipes = yield call(recipeService.addNewRecipe, action.payload);
    yield put({
      type: "RECIPES/ADD_NEW_RECIPE_SUCCESSFULLY",
      payload: { recipes },
    });
  } catch ({ message }) {
    alert(message);
    yield put({ type: "RECIPES/ADD_NEW_RECIPE_ERROR", payload: { message } });
  }
}

function* fetchRecipesSaga() {
  yield takeLatest("RECIPES/FETCH_RECIPES", fetchRecipes);
}

function* saveRecipeSaga() {
  yield takeLatest("RECIPES/SAVE_NEW_RECIPE", addRecipe);
}

export default function* recipeSaga() {
  yield all([fetchRecipesSaga(), saveRecipeSaga()]);
}
