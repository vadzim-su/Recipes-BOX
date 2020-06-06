import React from "react";
import "./App.css";
import Button from "./components/Button";
import RecipeForm from "./containers/RecipeForm";
import RecipesButtonList from "./containers/RecipesButtonList";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./components/Welcome";
import Recipes from "./containers/Recipes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <h1 className="sidebar__title">
            Recipes BOX<i className="fas fa-drumstick-bite"></i>
          </h1>
          <div className="button__bar">
            <Link to="/add">
              <Button title={"Add a New Recipe"} styleName={"button__add"} />
            </Link>

            <Link to="/show">
              <Button title={"Show All Recipes"} styleName={"button__show"} />
            </Link>

            <Link to="/welcome">
              <Button
                title={"Remove All Recipes"}
                styleName={"button__remove"}
              />
            </Link>
          </div>
          <h2 className="sidebar__list">Recipe List</h2>
          {/* <RecipesButtonList /> */}
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/welcome">
              <Welcome />
            </Route>

            <Route path="/add">
              <RecipeForm />
            </Route>

            <Route path="/show">
              <Recipes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
