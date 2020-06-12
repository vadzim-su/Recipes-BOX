import React from "react";

function CardRecipe({
  recipe: { id, url, name, steps },
  deleteRecipe,
  editRecipe,
}) {
  function onDelete(id) {
    if (window.confirm("Are you sure?")) {
      deleteRecipe(id);
    }
  }

  function onEdit(id) {
    if (window.confirm("Are you sure?")) {
      editRecipe(id);
    }
  }

  return (
    <div className="card" key={id}>
      <img src={url} className="card-img-top" alt="nothing" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-text">
          {steps.map((item, id) => (
            <p key={id + 100}>{item}</p>
          ))}
        </div>
      </div>
      <div className="card__icons">
        <i onClick={onDelete.bind(this, id)} className="far fa-trash-alt"></i>
        <i onClick={onEdit.bind(this, id)} className="fas fa-pencil-alt"></i>
      </div>
    </div>
  );
}

export default CardRecipe;
