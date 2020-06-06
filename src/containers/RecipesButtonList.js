import { connect } from "react-redux";
import RecipesButtonList from "../components/RecipesButtonList";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onSubmit: () =>
    //   dispatch({
    //     type: "FORM/ADD_RECIPE",
    //     payload: {
    //       value: 123,
    //     },
    //   }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesButtonList);
