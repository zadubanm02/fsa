import React, { useState, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import { Home } from "./Home";
import { Posts } from "./Posts";
import { Contact } from "./Contact";
import { Detail } from "./Detail";
import { AddNewForm } from "./components/AddNewForm";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";

export function AppRouter() {
  const [user, setUser] = useState(null);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerUser}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Detail} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add" component={AddNewForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
      </Switch>
    </UserContext.Provider>
  );
}
