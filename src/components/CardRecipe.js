import React from "react";
import { Link } from "react-router-dom";

function CardRecipe({
  recipe: { id, url, name, steps, type },
  deleteRecipe,
  // types,
}) {
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
          {type === "For vegans" ? (
            <i className="fas fa-seedling"></i>
          ) : type === "Beverages" ? (
            <i className="fas fa-cocktail"></i>
          ) : type === "Fish" ? (
            <i className="fas fa-fish"></i>
          ) : type === "Meat" ? (
            <i className="fas fa-drumstick-bite"></i>
          ) : type === "Snacks" ? (
            <i className="fas fa-hamburger"></i>
          ) : type === "Salads" ? (
            <i className="fas fa-carrot"></i>
          ) : (
            <i className="fas fa-birthday-cake"></i>
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
