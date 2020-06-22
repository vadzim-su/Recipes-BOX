import { connect } from "react-redux";
import App from "./../App";
import Actions from "./../actions/recipes";

const mapStateToProps = (state) => {
  return { recipes: state.recipes.recipes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllRecipes: () => dispatch(Actions["RECIPES/DELETE_ALL_RECIPES"]()),
    fetchRecipes: () => dispatch(Actions["RECIPES/FETCH_RECIPES"]()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
