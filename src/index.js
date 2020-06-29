import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";
import recipeSaga from "./sagas/recipeSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(recipeSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
