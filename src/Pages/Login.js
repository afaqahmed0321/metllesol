import React, { useState } from "react";

const Login = () => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [enteredEmailIsValid, setEnterIsValid] = useState(true);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    console.log("email", enteredEmail);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    console.log("password", enteredPassword);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      setEnterIsValid(false);
      return;
    }
    setEnterIsValid(true);
    setEmail("");
    setPassword("");
  };

  const inputNameClasses = enteredEmailIsValid
    ? "login__contain"
    : "login__contain invalid";
  return (
    <>
      <section class="main__login">
        <div className="login_flex">
          <div className="login_fields">
            <h1>MettleSol</h1>
            <p>Let's SignIn for the Dashboard!</p>
            <div className="login_content-iner">
              <form onSubmit={formSubmissionHandler}>
                <div className={inputNameClasses}>
                  <label htmlFor="email">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                  />
                  {!enteredEmailIsValid && (
                    <span className="error">Email Can't be empty!</span>
                  )}
                  <label htmlFor="psw">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                  />
                  {!enteredEmailIsValid && (
                    <span className="error">Password Can't be empty</span>
                  )}
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
