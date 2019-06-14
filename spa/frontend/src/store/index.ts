import { createStore, Store, applyMiddleware } from "redux";
import { AddressState } from "./ducks/address/types";
import { AuthState } from "./ducks/auth/types";
import rootReducer from "./ducks";
import createSageMiddleware from "redux-saga";
import rootSaga from "./ducks/rootSaga";
export interface ApplicationState {
  auth: AuthState;
  address: AddressState;
}
const sagaMiddleware = createSageMiddleware();
const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
