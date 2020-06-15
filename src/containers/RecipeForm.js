import { connect } from "react-redux";
import RecipeForm from "../components/RecipeForm";

const mapStateToProps = (state, ownProps) => {
  const recipe = state.recipes.recipes.find(
    (recipe) => String(recipe.id) === ownProps.match.params.id
  ) || { name: "", url: "", steps: [] };

  return {
    recipe: recipe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (recipe) =>
      dispatch({
        type: !recipe.id ? "FORM/ADD_RECIPE" : "RECIPES/EDIT_RECIPE",
        payload: recipe,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
