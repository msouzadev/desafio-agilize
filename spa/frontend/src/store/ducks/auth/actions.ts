import { action } from "typesafe-actions";

import { AuthTypes } from "./types";

export const loadRequest = () => action(AuthTypes.LOAD_REQUEST);

export const loadSuccess = (data: any) =>
  action(AuthTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(AuthTypes.LOAD_FAILURE);
