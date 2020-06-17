import { createAction } from "redux-actions";

export default {
  "FORM/ADD_RECIPE": createAction("FORM/ADD_RECIPE"),
  "RECIPES/EDIT_RECIPE": createAction("RECIPES/EDIT_RECIPE"),
  "RECIPES/DELETE_ALL_RECIPES": createAction("RECIPES/DELETE_ALL_RECIPES"),
  "RECIPES/DELETE_SINGLE_RECIPE": createAction("RECIPES/DELETE_SINGLE_RECIPE"),
  "RECIPES/FETCH_SUCCESSFULLY": createAction("RECIPES/FETCH_SUCCESSFULLY"),
};
