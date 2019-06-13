import { combineReducers } from "redux";
import address from "./address";
import auth from "./auth";

export default combineReducers({ address, auth });
