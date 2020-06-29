import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "./Button";

function Controls({ onDelete }) {
  return (
    <div className="button__bar">
      <Link to="/add">
        <Button title={"Add a New Recipe"} styleName={"button__add"} />
      </Link>

      <Link to="/show">
        <Button title={"Show All Recipes"} styleName={"button__show"} />
      </Link>

      <Button
        onClick={onDelete}
        title={"Remove All Recipes"}
        styleName={"button__remove"}
      />
    </div>
  );
}

export default Controls;
