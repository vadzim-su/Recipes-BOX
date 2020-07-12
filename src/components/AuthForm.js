import React, { useState } from "react";
import * as firebase from "firebase";

function AuthForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function authUser(e) {
    e.preventDefault();
    // const db = firebase.database();
    // console.log(db);

    firebase
      .auth()
      .createUserWithEmailAndPassword(login, password)
      .catch((error) => console.log(error));
  }

  return (
    <form onSubmit={authUser} className="auth">
      <input
        onChange={handleLoginChange}
        className="auth__login"
        type="text"
        placeholder="Login"
        value={login}
      />
      <input
        onChange={handlePasswordChange}
        className="auth__password"
        type="password"
        placeholder="Password"
        value={password}
      />
      <button className="auth__button">Login</button>
    </form>
  );
}

export default AuthForm;
