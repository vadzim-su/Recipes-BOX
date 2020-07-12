import React from "react";
import { Link } from "react-router-dom";

function RecipesButtonList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.id}`}
          className="button__recipe"
          key={recipe.id}
        >
          {recipe.name}
        </Link>
      ))}
    </div>
  );
}

export default RecipesButtonList;
