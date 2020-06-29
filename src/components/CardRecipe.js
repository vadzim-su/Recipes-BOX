import React from "react";
import { Link } from "react-router-dom";

function CardRecipe({ recipe: { id, url, name, steps }, deleteRecipe }) {
  function onDelete(id) {
    if (window.confirm("Are you sure?")) {
      deleteRecipe(id);
    }
  }

  return (
    <div className="card" key={id}>
      <img src={url} className="card-img-top" alt={`${name} recipe`} />
      <div className="card-body">
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
