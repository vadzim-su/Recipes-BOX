import React from "react";
import { useParams } from "react-router-dom";
import CardRecipe from "./../containers/CardRecipe";

function SingleRecipe({ recipes }) {
  let { id } = useParams();
  const recipe = recipes.find((recipe) => String(recipe.id) === id);
  return recipe ? (
    <CardRecipe recipe={recipe} />
  ) : (
    <div>You've just deleted the recipe</div>
  );
}

export default SingleRecipe;
