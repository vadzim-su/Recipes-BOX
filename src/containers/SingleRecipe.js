import { connect } from "react-redux";
import SingleRecipe from "../components/SingleRecipe";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

export default connect(mapStateToProps, null)(SingleRecipe);
