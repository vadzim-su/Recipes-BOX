import { connect } from "react-redux";
import Recipes from "./../components/Recipes";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    errorText: state.recipes.fetchErrorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () =>
      dispatch({
        type: "RECIPES/FETCH_RECIPES",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
