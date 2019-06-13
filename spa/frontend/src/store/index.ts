import { createStore, Store } from "redux";
import { AddressState } from "./ducks/address/types";
import { AuthState } from "./ducks/auth/types";
import rootReducer from "./ducks";
export interface ApplicationState {
  auth: AuthState;
  addresses: AddressState;
}
const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
