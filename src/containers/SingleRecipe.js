import { connect } from "react-redux";
import SingleRecipe from "../components/SingleRecipe";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // clickedDelete: (id) =>
    //   dispatch({
    //     type: "RECIPES/CLICKED_DELETE",
    //     payload: {
    //       id,
    //     },
    //   }),
    // clickedEdit: (id) =>
    //   dispatch({
    //     type: "RECIPES/CLICKED_EDIT",
    //     payload: {
    //       id,
    //     },
    //   }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);
