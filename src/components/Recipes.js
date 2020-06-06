import React from "react";

function Recipes({ recipes, clickedDelete, clickedEdit }) {
  return (
    <div className="cards__food">
      {recipes.map((item, id) => (
        <div className="card" key={id}>
          {/* <img src={id + 1 + ".jpg"} className="card-img-top" alt="nothing" /> */}
          <div className="card-body" key={id}>
            <div className="card__icons">
              <i
                onClick={clickedDelete.bind(this, id)}
                className="far fa-trash-alt"
              ></i>
              <i onClick={clickedEdit} className="fas fa-pencil-alt"></i>
            </div>
            <h2 className="card-title">{item.name}</h2>
            <div className="card-text">
              {item.steps.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
