import React from "react";
import { useParams } from "react-router-dom";
import CardRecipe from "./../containers/CardRecipe";

function SingleRecipe({ recipes }) {
  let { id } = useParams();
  // console.log(id);
  // console.log(recipes);
  const recipe = recipes.find((recipe) => String(recipe.id) === id);

  return recipe ? <CardRecipe recipe={recipe} /> : <div>Not found</div>;
}

export default SingleRecipe;
