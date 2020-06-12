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
        type: "RECIPES/CLICKED_DELETE",
        payload: {
          id,
        },
      }),

    editRecipe: (id) =>
      dispatch({
        type: "RECIPES/CLICKED_EDIT",
        payload: {
          id,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRecipe);
