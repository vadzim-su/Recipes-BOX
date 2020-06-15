import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function RecipesButtonList({ recipes }) {
  return (
    <div>
      {recipes.map((item) => (
        <Link
          to={`/recipe/${item.id}`}
          className="button__recipe"
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default RecipesButtonList;
