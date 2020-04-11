import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainScreen from "../main";
import MenuScreen from "../menu";

const Router = () => (
  <Switch>
    <Route path="/main" component={MainScreen} />
    <Route path="/menu" component={MenuScreen} />
    <Redirect path="*" to={"/main"} component={MainScreen} />
  </Switch>
);

export default Router;
