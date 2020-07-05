import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { firebaseClass } from "../firebase";
import { UserContext } from "../UserContext";
import { Navigation } from "./Navigation";

const LoginComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const login = async (event) => {
    event.preventDefault();
    try {
      await firebaseClass.logIn(email, password).then((res) => {
        console.log(res.user);
        setUser(res.user);
      });
      props.history.replace("/posts");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navigation />
      <div className="m-3 ">
        <h2 className="text-center font-weight-bold m-3">Prihlás sa</h2>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <form className="">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                  className="form-control addnew-text-input"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                  className="form-control addnew-text-input"
                  placeholder="Password"
                />

                <br />
                <button
                  className="login-button btn btn-primary"
                  style={{ background: "#FBD34D" }}
                  onClick={login}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
};

export default withRouter(LoginComponent);
