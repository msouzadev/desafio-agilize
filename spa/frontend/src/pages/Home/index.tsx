import React, { Component } from "react";
import HomeContainer from "../../components/HomeContainer";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";
import * as AddressActions from "../../store/ducks/address/actions";
import { AddressState } from "../../store/ducks/address/types";
import api from "../../services/api";
interface DispatchProps {
  findAddress(postalCode: string): void;
}
interface StateProps {
  address: AddressState;
}
interface OwnProps {
  history: any;
}
type Props = DispatchProps & StateProps & OwnProps;
class Home extends Component<Props> {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }
  state = {
    postalCode: ""
  };
  handleSearch = () => {
    const { history } = this.props;
    const { postalCode } = this.state;
    const token = localStorage.getItem("token");
    api
      .post(
        "api/address",
        { postalCode },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => history.push("/home/list"))
      .catch();
  };

  handleTextChange = (postalCode: string) => {
    this.setState({ postalCode });
  };
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };
  render() {
    const { address, history } = this.props;

    return (
      <div>
        <HomeContainer
          handleSearch={this.handleSearch}
          handleTextChange={this.handleTextChange}
          disabled={address.loading}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  address: state.address
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AddressActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
