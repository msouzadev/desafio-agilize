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

const AddressList = Loadable({
  loader: () => import("./pages/AddressList"),
  loading() {
    return <Loader />;
  }
});
export const App = () => (
  <Switch>
    <Route exact path="/" component={SigninPage} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/home/list" component={AddressList} />
  </Switch>
);

export default App;
