import React from "react";

function Recipes({ recipes, clickedDelete, clickedEdit }) {
  function deleteRecipe(id) {
    if (window.confirm("Are you sure?")) {
      clickedDelete(id);
    }
  }

  return (
    <div className="card__food">
      {/* <div className="card__wrapper"> */}
      {recipes.length ? (
        recipes.map((item, id) => (
          <div className="card" key={id}>
            <img src={item.url} className="card-img-top" alt="nothing" />
            <div className="card-body" key={id}>
              <h2 className="card-title">{item.name}</h2>
              <div className="card-text">
                {item.steps.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
            <div className="card__icons">
              <i
                onClick={deleteRecipe.bind(this, id)}
                className="far fa-trash-alt"
              ></i>
              <i
                onClick={clickedEdit.bind(this, id)}
                className="fas fa-pencil-alt"
              ></i>
            </div>
          </div>
        ))
      ) : (
        <span className="card__empty">You have no recipes yet.</span>
      )}
      {/* </div> */}
    </div>
  );
}

export default Recipes;
