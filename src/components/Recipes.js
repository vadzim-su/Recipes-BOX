import React, { useEffect } from "react";
import propTypes from "prop-types";
import CardRecipe from "./../containers/CardRecipe";

function Recipes({ recipes, fetchRecipes, fetchErrorMessage }) {
  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (fetchErrorMessage) {
      alert(123);
    }
  }, [fetchErrorMessage]);

  return (
    <div className="card__food">
      {recipes.length ? (
        recipes.map((recipe) => <CardRecipe recipe={recipe} key={recipe.id} />)
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
