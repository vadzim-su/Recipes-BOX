import { connect } from "react-redux";
import RecipeForm from "../components/RecipeForm";
import Actions from "./../actions/recipes";

const mapStateToProps = (state, ownProps) => {
  const recipe = state.recipes.recipes.find(
    (recipe) => String(recipe.id) === ownProps.match.params.id
  ) || { name: "", url: "", steps: [] };
  return {
    recipe: recipe,
    types: state.recipes.types,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (recipe) =>
      dispatch(
        Actions[!recipe.id ? "RECIPES/SAVE_NEW_RECIPE" : "RECIPES/EDIT_RECIPE"](
          recipe
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
