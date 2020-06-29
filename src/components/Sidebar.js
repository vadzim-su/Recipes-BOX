import React from "react";
import Controls from "./Controls";
import RecipesButtonList from "./../containers/RecipesButtonList";
import { useHistory } from "react-router-dom";

function Sidebar({ recipes, deleteAllRecipes }) {
  const history = useHistory();

  function onDelete() {
    if (window.confirm("Are you sure?")) {
      deleteAllRecipes();
      history.push("/");
    }
  }
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">
        Recipes BOX<i className="fas fa-drumstick-bite"></i>
      </h1>

      <Controls onDelete={onDelete} />

      <h2 className="sidebar__list">{recipes.length ? "Recipe List" : null}</h2>
      <RecipesButtonList />
    </div>
  );
}

export default Sidebar;
