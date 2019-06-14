import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as AuthActions from "../../store/ducks/auth/actions";
import { ApplicationState } from "../../store";
import { Address } from "../../store/ducks/address/types";
import { AuthForm } from "../../store/ducks/auth/types";
import api from "../../services/api";
// import { Container } from './styles';
interface StateProps {
  address: Address[];
}
interface OwnProps {
  history: any;
}
interface DispatchProps {
  makeAuth(credentials: AuthForm): void;
}
type Props = StateProps & DispatchProps & OwnProps;
class Signin extends Component<Props> {
  componentDidMount() {}
  state = {
    credentials: { email: "desafio@agilize.com", password: "desafio" }
  };
  handleAuth = () => {
    api
      .post("/auth", this.state.credentials)
      .then(res => localStorage.setItem("token", res.data.token))
      .then(this.props.history.push("/home"));
  };
  render() {
    console.log(this.props);
    return (
      <div className="text-center">
        <form className="form-signin">
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label className="sr-only">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            required
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <button
            onClick={this.handleAuth}
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
