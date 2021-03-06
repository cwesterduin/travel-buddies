import React from "react";
import "./App.css";

import { Home, Profile, Holiday, PageNotFound, Temp } from "./pages";
import { PrivateRoute, AuthRoute } from "./layout";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/profile/" component={Profile} />
        <AuthRoute path="/holidays/:id" component={Holiday} key={Math.random()} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
