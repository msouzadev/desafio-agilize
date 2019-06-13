import { AuthState, AuthTypes } from "./types";
import { Reducer } from "redux";
const INITIAL_STATE: AuthState = {
  data: {},
  error: false,
  loading: false
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case AuthTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
};

export default reducer;
