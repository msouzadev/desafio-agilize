import { AddressState, AddressTypes } from "./types";
import { Reducer } from "redux";
const INITIAL_STATE: AddressState = {
  data: [],
  error: false,
  loading: false
};

const reducer: Reducer<AddressState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AddressTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case AddressTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case AddressTypes.LOAD_FAILURE:
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
