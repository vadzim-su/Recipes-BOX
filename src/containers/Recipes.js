import { connect } from "react-redux";
import Recipes from "../components/Recipes";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickedDelete: (id) =>
      dispatch({
        type: "RECIPES/CLICKED_DELETE",
        payload: {
          id,
        },
      }),

    clickedEdit: (id) =>
      dispatch({
        type: "RECIPES/CLICKED_EDIT",
        payload: {
          id,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
