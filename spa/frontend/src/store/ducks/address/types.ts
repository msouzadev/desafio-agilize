export enum AddressTypes {
  LOAD_REQUEST = "@auth/LOAD_REQUEST",
  LOAD_SUCCESS = "@auth/LOAD_SUCCESS",
  LOAD_FAILURE = "@auth/LOAD_FAILURE"
}

export interface Address {
  id: number;
  postalcode: string;
  street: string;
  district: string;
  complement: string;
  uf: string;
  unity: string;
  ibge: string;
  gia: string;
}

export interface AddressState {
  readonly data: Address[];
  readonly loading: boolean;
  readonly error: boolean;
}
