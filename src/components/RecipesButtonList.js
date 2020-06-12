import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function RecipesButtonList({ recipes }) {
  return (
    <div>
      {recipes.map((item, id) => (
        <Link to={`/recipe/${id}`} className="button__recipe" key={id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default RecipesButtonList;
