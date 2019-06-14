export enum AddressTypes {
  LOAD_REQUEST = "@address/LOAD_REQUEST",
  LOAD_SUCCESS = "@address/LOAD_SUCCESS",
  LOAD_FAILURE = "@address/LOAD_FAILURE",
  FIND_ADDRESS = "@address/FIND_ADDRESS",
  FIND_ADDRESS_SUCCESS = "@address/FIND_ADDRESS_SUCCESS"
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
