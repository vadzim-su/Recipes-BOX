import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";
import recipeSaga from "./sagas/recipeSaga";
// import * as firebase from "firebase";

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const firebaseConfig = {
  apiKey: "AIzaSyDkG4l3voRR-iorcaE_tTFazlalADvyMOE",
  authDomain: "recipe-box-ec2cb.firebaseapp.com",
  databaseURL: "https://recipe-box-ec2cb.firebaseio.com",
  projectId: "recipe-box-ec2cb",
  storageBucket: "recipe-box-ec2cb.appspot.com",
  messagingSenderId: "868266920015",
  appId: "1:868266920015:web:ec1728849351f7ce37023a",
  measurementId: "G-1W2R8Q7QCH",
};

// firebase.initializeApp(firebaseConfig);

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
