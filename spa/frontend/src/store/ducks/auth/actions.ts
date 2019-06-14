import { action } from "typesafe-actions";

import { AuthTypes, AuthForm } from "./types";

export const makeAuth = (data: AuthForm) => action(AuthTypes.LOAD_REQUEST);

export const authSuccess = (data: any) =>
  action(AuthTypes.LOAD_SUCCESS, { data });

export const authFailure = () => action(AuthTypes.LOAD_FAILURE);
