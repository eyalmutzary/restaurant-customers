import React from "react";
import { Route, Switch } from "react-router-dom";
import MainScreen from "../main";

const Router = () => (
  <Switch>
    <Route path="/" component={MainScreen} />
  </Switch>
);

export default Router;
