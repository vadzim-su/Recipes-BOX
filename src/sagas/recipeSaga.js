import { call, put, takeLatest, all } from "redux-saga/effects";

import recipeService from "./../service/recipeService";

import Actions from "./../actions/recipes";

function* fetchRecipes() {
  try {
    let recipes = yield call(recipeService.getRecipes);
    yield put(Actions["RECIPES/FETCH_SUCCESSFULLY"](recipes));
  } catch ({ message }) {
    yield put({ type: "RECIPES/DATA_ERROR", payload: { message } });
  }
}

function* addRecipe(action) {
  try {
    let newRecipe = yield call(recipeService.addNewRecipe, action.payload);
    yield put(Actions["RECIPES/ADD_NEW_RECIPE_SUCCESSFULLY"](newRecipe));
  } catch ({ message }) {
    yield put({ type: "RECIPES/DATA_ERROR", payload: { message } });
  }
}

function* deleteAllRecipes() {
  try {
    let recipes = yield call(recipeService.deleteRecipes);
    yield put(Actions["RECIPES/DELETE_ALL_RECIPES_SUCCESSFULLY"](recipes));
  } catch ({ message }) {
    yield put({ type: "RECIPES/DATA_ERROR", payload: { message } });
  }
}

function* deleteRecipe(action) {
  try {
    let id = yield call(recipeService.deleteSingleRecipe, action.payload.id);
    yield put(Actions["RECIPES/DELETE_SINGLE_RECIPE_SUCCESSFULLY"](id));
  } catch ({ message }) {
    yield put({ type: "RECIPES/DATA_ERROR", payload: { message } });
  }
}

function* editCurrentRecipe(action) {
  try {
    let recipes = yield call(recipeService.editRecipe, action.payload);
    yield put(Actions["RECIPES/EDIT_RECIPE_SUCCESSFULLY"](recipes));
  } catch ({ message }) {
    yield put({ type: "RECIPES/DATA_ERROR", payload: { message } });
  }
}

function* getRecipesTypes(action) {
  try {
    let types = yield call(recipeService.getTypes, action.payload);
    yield put(Actions["RECIPES/FETCH_TYPES_SUCCESSFULLY"](types));
  } catch ({ message }) {
    yield put({ type: "RECIPES/DATA_ERROR", payload: { message } });
  }
}

// ========================================================

function* fetchRecipesSaga() {
  yield takeLatest("RECIPES/FETCH_RECIPES", fetchRecipes);
}

function* addRecipeSaga() {
  yield takeLatest("RECIPES/SAVE_NEW_RECIPE", addRecipe);
}

function* deleteRecipeSaga() {
  yield takeLatest("RECIPES/DELETE_SINGLE_RECIPE", deleteRecipe);
}

function* deleteAllRecipesSaga() {
  yield takeLatest("RECIPES/DELETE_ALL_RECIPES", deleteAllRecipes);
}

function* editRecipesSaga() {
  yield takeLatest("RECIPES/EDIT_RECIPE", editCurrentRecipe);
}

function* fetchTypesSaga() {
  yield takeLatest("RECIPES/FETCH_TYPES", getRecipesTypes);
}

export default function* recipeSaga() {
  yield all([
    fetchRecipesSaga(),
    addRecipeSaga(),
    deleteRecipeSaga(),
    deleteAllRecipesSaga(),
    editRecipesSaga(),
    fetchTypesSaga(),
  ]);
}
