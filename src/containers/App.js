import { connect } from "react-redux";
import App from "./../App";

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllRecipes: () =>
      dispatch({
        type: "RECIPES/DELETE_ALL",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
