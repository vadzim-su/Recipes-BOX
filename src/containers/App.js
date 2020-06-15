import { connect } from "react-redux";
import App from "./../App";

const mapStateToProps = (state) => {
  return { recipes: state.recipes.recipes };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllRecipes: (e) =>
      dispatch({
        type: "RECIPES/DELETE_ALL_RECIPES",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
