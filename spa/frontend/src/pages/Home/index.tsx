import React, { Component } from "react";
import HomeContainer from "../../components/HomeContainer";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";
import * as AddressActions from "../../store/ducks/address/actions";
import { AddressState } from "../../store/ducks/address/types";
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
    console.log(this.props);
  }
  state = {
    postalCode: ""
  };
  handleSearch = () => {
    console.log("search");
    const { findAddress } = this.props;
    findAddress(this.state.postalCode);
  };

  handleTextChange = (postalCode: string) => {
    this.setState({ postalCode });
  };
  render() {
    const { address, history } = this.props;

    return (
      <div>
        <HomeContainer
          handleSearch={this.handleSearch}
          handleTextChange={this.handleTextChange}
          disabled={address.loading}
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
