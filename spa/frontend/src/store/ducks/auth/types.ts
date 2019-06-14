export enum AuthTypes {
  LOAD_REQUEST = "@auth/LOAD_REQUEST",
  LOAD_SUCCESS = "@auth/LOAD_SUCCESS",
  LOAD_FAILURE = "@auth/LOAD_FAILURE"
}
export interface Auth {
  token: string;
}
export interface AuthForm {
  email: string;
  password: string;
}
export interface AuthState {
  readonly data: object;
  readonly loading: boolean;
  readonly error: boolean;
}
