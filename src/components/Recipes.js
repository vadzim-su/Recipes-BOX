import React from "react";
import CardRecipe from "./../containers/CardRecipe";

function Recipes({ recipes }) {
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

export default Recipes;
