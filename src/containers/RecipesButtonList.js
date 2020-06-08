import { connect } from "react-redux";
import RecipesButtonList from "../components/RecipesButtonList";
// import Button from "../components/Button";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // deleteAllRecipes: (e) =>
    //   dispatch({
    //     type: "RECIPES/DELETE_ALL",
    //   }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  RecipesButtonList
  // Button
);
