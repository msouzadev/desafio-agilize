import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Redirect } from "react-router-dom";
import Signin from "../Signin";

export class Protected extends React.Component {
  async componentDidMount() {}
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/" />;
    }
  }
}

export default Protected;
