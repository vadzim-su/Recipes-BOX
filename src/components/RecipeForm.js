import React from "react";

function RecipeForm({
  name,
  url,
  steps,
  onRecipeNameChanged,
  onRecipeUrlChanged,
  onRecipeStepsChanged,
  addRecipeToStore,
}) {
  function submitForm(e) {
    e.preventDefault();

    addRecipeToStore(e);
  }
  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form__wrapper">
        <div className="form-group">
          <input
            value={name}
            type="text"
            className="form-control"
            placeholder="Recipe name"
            onChange={onRecipeNameChanged}
            required
          />
        </div>

        <div className="form-group">
          <input
            value={url}
            type="text"
            className="form-control"
            placeholder="Recipe image URL"
            onChange={onRecipeUrlChanged}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            value={steps}
            className="form-control"
            placeholder="Ingredients"
            onChange={onRecipeStepsChanged}
            required
          ></textarea>
        </div>

        <div className="button__submit"></div>
        <button type="submit" className="btn btn-primary">
          OK
        </button>

        <button type="button" className="btn btn-warning">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
