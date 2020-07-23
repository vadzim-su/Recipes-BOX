import React from "react";
import { Link } from "react-router-dom";

function CardRecipe({ recipe: { id, url, name, steps, kind }, deleteRecipe }) {
  function onDelete(id) {
    if (window.confirm("Are you sure?")) {
      deleteRecipe(id);
    }
  }

  return (
    <div className="card" key={id}>
      <img src={url} className="card-img-top" alt={`${name} recipe`} />
      <div className="card-body">
        <span className="card-title">
          {kind === "For vegans" ? (
            <i class="fas fa-seedling"></i>
          ) : kind === "Beverages" ? (
            <i class="fas fa-cocktail"></i>
          ) : kind === "Fish" ? (
            <i class="fas fa-fish"></i>
          ) : kind === "Meat" ? (
            <i class="fas fa-drumstick-bite"></i>
          ) : kind === "Snacks" ? (
            <i class="fas fa-hamburger"></i>
          ) : kind === "Salads" ? (
            <i class="fas fa-carrot"></i>
          ) : (
            <i class="fas fa-birthday-cake"></i>
          )}
        </span>
        <h2 className="card-title">{name}</h2>
        <div className="card-text">
          {steps.map((item, id) => (
            <p key={id + 1000}>{item}</p>
          ))}
        </div>
      </div>
      <div className="card__icons">
        <i onClick={onDelete.bind(this, id)} className="far fa-trash-alt"></i>
        <Link to={`/recipe/edit/${id}`}>
          <i className="fas fa-pencil-alt"></i>
        </Link>
      </div>
    </div>
  );
}

export default CardRecipe;
