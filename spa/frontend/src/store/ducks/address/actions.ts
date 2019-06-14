import { action } from "typesafe-actions";

import { AddressTypes } from "./types";

export const loadRequest = () => action(AddressTypes.LOAD_REQUEST);

export const loadSuccess = (data: any) =>
  action(AddressTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(AddressTypes.LOAD_FAILURE);
