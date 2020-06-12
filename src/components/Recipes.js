import React, { useEffect } from "react";
import propTypes from "prop-types";
import CardRecipe from "./CardRecipe";

function Recipes({ recipes, fetchRecipes }) {
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="card__food">
      {recipes.length ? (
        recipes.map((recipe) => (
          <CardRecipe
            // deleteRecipe={clickedDelete}
            // editRecipe={clickedEdit}
            recipe={recipe}
          />
        ))
      ) : (
        <span className="card__empty">You have no recipes yet.</span>
      )}
    </div>
  );
}

Recipes.propTypes = {
  recipes: propTypes.array,
  fetchRecipes: propTypes.func,
};

export default Recipes;
