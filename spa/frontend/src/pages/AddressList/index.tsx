import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";
import * as AddressActions from "../../store/ducks/address/actions";
import Container from "./Container";
import { AddressState } from "../../store/ducks/address/types";
interface DispatchProps {
  loadRequest(): void;
}
interface StateProps {
  address: AddressState;
}
interface OwnProps {
  history: any;
}

type Props = DispatchProps & StateProps & OwnProps;
class AddressList extends Component<Props> {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
    }
    const { loadRequest } = this.props;
    loadRequest();
  }
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };
  render() {
    const { address } = this.props;

    console.log(address);
    return (
      <div>
        {address.data.length && (
          <Container
            handleLogout={this.handleLogout}
            addresses={address.data}
          />
        )}
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
)(AddressList);
