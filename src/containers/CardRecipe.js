import { connect } from "react-redux";
import CardRecipe from "./../components/CardRecipe";
import Actions from "./../actions/recipes";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    types: state.recipes.types,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (id) =>
      dispatch(
        Actions["RECIPES/DELETE_SINGLE_RECIPE"]({
          id,
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRecipe);
