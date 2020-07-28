import { ThunkType, DefaultSchema } from "./commonTypes";

// ------ COMMON INTERFACES ------ //
export interface Clients {
  id: number;
  name: string;
  locations: number[];
  deliveries: number[];
}

export interface ClientsState {
  clients: DefaultSchema<Clients>;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchClients = () => ThunkType;
export type FetchClient = (clientId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_CLIENTS_START = "FETCH_CLIENTS_START";
export const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
export const FETCH_CLIENTS_FAILED = "FETCH_CLIENTS_FAILED";

export const FETCH_CLIENT_START = "FETCH_CLIENT_START";
export const FETCH_CLIENT_SUCCESS = "FETCH_CLIENT_SUCCESS";
export const FETCH_CLIENT_FAILED = "FETCH_CLIENT_FAILED";

// ------ TYPES ------ //
interface FetchClientsSuccess {
  type: typeof FETCH_CLIENTS_SUCCESS;
  data: ClientsState;
}

interface FetchClientSuccess {
  type: typeof FETCH_CLIENT_SUCCESS;
  data: ClientsState;
}

export type Types = FetchClientsSuccess | FetchClientSuccess;
