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

function addNewRecipe() {}

function* fetchRecipesSaga() {
  yield takeLatest("RECIPES/FETCH_RECIPES", fetchRecipes);
}

export default function* recipeSaga() {
  yield all([fetchRecipesSaga()]);
}
