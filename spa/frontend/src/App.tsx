import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Loadable from "react-loadable";
import Loader from "./components/Loader";
const SigninPage = Loadable({
  loader: () => import("./pages/Signin"),
  loading() {
    return <Loader />;
  }
});
const Home = Loadable({
  loader: () => import("./pages/Home"),
  loading() {
    return <Loader />;
  }
});
export const App = () => (
  <Switch>
    <Route exact path="/" component={SigninPage} />
  </Switch>
);

export default App;
