import { connect } from "react-redux";
import RecipeForm from "../components/RecipeForm";

const mapStateToProps = (state) => {
  return {
    name: state.recipes.recipeName,
    steps: state.recipes.recipeSteps,
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () =>
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
