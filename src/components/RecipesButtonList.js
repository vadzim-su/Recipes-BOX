import React from "react";

function RecipesButtonList({ recipes }) {
  console.log(recipes);
  return (
    <div>
      {recipes.map((item, id) => (
        <button className="button__recipe" key={id}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default RecipesButtonList;
