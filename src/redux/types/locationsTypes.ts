import { ThunkType, DefaultSchema } from "./commonTypes";

// ------ COMMON INTERFACES ------ //
export interface Locations {
  id: number;
  client_id: number;
  location_name: string;
  primary_location: boolean;
  primary_contact: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
  pickups: number[];
  dropoffs: number[];
}

export interface LocationsState {
  locations: DefaultSchema<Locations>;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchLocations = () => ThunkType;
export type FetchClientLocations = (clientId: number) => ThunkType;
export type FetchLocation = (locationId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_LOCATIONS_START = "FETCH_LOCATIONS_START";
export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const FETCH_LOCATIONS_FAILED = "FETCH_LOCATIONS_FAILED";

export const FETCH_CLIENT_LOCATIONS_START = "FETCH_CLIENT_LOCATIONS_START";
export const FETCH_CLIENT_LOCATIONS_SUCCESS = "FETCH_CLIENT_LOCATIONS_SUCCESS";
export const FETCH_CLIENT_LOCATIONS_FAILED = "FETCH_CLIENT_LOCATIONS_FAILED";

export const FETCH_LOCATION_START = "FETCH_LOCATION_START";
export const FETCH_LOCATION_SUCCESS = "FETCH_LOCATION_SUCCESS";
export const FETCH_LOCATION_FAILED = "FETCH_LOCATION_FAILED";

// ------ TYPES ------ //
interface FetchLocationsSuccess {
  type: typeof FETCH_LOCATIONS_SUCCESS;
  data: LocationsState;
}

interface FetchClientLocationsSuccess {
  type: typeof FETCH_CLIENT_LOCATIONS_SUCCESS;
  data: LocationsState;
}

interface FetchLocationSuccess {
  type: typeof FETCH_LOCATION_SUCCESS;
  data: LocationsState;
}

export type Types =
  | FetchLocationsSuccess
  | FetchClientLocationsSuccess
  | FetchLocationSuccess;
