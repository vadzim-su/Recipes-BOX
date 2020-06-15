import { connect } from "react-redux";
import RecipesButtonList from "../components/RecipesButtonList";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

export default connect(mapStateToProps, null)(RecipesButtonList);
