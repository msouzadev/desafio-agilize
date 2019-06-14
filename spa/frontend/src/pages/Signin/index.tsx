import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as AuthActions from "../../store/ducks/auth/actions";
import { ApplicationState } from "../../store";
import { Address } from "../../store/ducks/address/types";
import { AuthForm } from "../../store/ducks/auth/types";
import LoginForm from "../../components/LoginForm";
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
    credentials: { email: "", password: "" }
  };
  handleAuth = () => {
    api
      .post("/auth", this.state.credentials)
      .then(res => localStorage.setItem("token", res.data.token))
      .then(this.props.history.push("/home"));
  };
  handlePassChange = (text: string) => {
    this.setState({
      credentials: { ...this.state.credentials, password: text }
    });
  };
  handleEmailChange = (text: string) => {
    this.setState({
      credentials: { ...this.state.credentials, email: text }
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className="text-center">
        <LoginForm
          handleSubmit={this.handleAuth}
          handleEmailChange={this.handleEmailChange}
          handlePassChange={this.handlePassChange}
        />
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
