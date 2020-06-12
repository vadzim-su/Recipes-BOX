import { connect } from "react-redux";
import RecipesButtonList from "../components/RecipesButtonList";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesButtonList);
