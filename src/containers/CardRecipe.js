import { connect } from "react-redux";
import CardRecipe from "./../components/CardRecipe";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (id) =>
      dispatch({
        type: "RECIPES/DELETE_SINGLE_RECIPE",
        payload: {
          id,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRecipe);
