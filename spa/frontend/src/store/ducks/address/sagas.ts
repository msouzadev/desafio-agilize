import { call, put } from "redux-saga/effects";

import api from "../../../services/api";
import { Address } from "./types";
import { loadRequest, loadSuccess, loadFailure } from "./actions";

export function* load() {
  try {
    const token = localStorage.getItem("token");
    const response = yield call(api.get, "api/address", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
