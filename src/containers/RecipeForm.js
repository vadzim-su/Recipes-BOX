import { connect } from "react-redux";
import RecipeForm from "../components/RecipeForm";

const mapStateToProps = (state, ownProps) => {
  // let { id } = ownProps.
  console.log(ownProps);
  // const recipe = recipes.find((recipe) => String(recipe.id) === id);
  return {
    recipes: state.recipes.recipes,
    name: state.recipes.recipeName,
    url: state.recipes.recipeUrl,
    steps: state.recipes.recipeSteps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipeToStore: () =>
      dispatch({
        type: "FORM/ADD_RECIPE",
      }),

    onRecipeNameChanged: (e) =>
      dispatch({
        type: "FORM/CHANGED_RECIPE_NAME",
        payload: {
          value: e.target.value,
        },
      }),

    onRecipeUrlChanged: (e) =>
      dispatch({
        type: "FORM/CHANGED_RECIPE_URL",
        payload: {
          value: e.target.value,
        },
      }),

    onRecipeStepsChanged: (e) =>
      dispatch({
        type: "FORM/CHANGED_RECIPE_STEPS",
        payload: {
          value: e.target.value,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
