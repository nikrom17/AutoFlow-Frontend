import { ThunkType, DefaultSchema } from "./commonTypes";

// ------ COMMON INTERFACES ------ //
export interface Deliveries {
  id: number;
  clientId: number;
  dateCreated: Date;
  item: string;
  notes: string;
  dateFulfilled: Date;
  pickup_location_id: number;
  dropoff_location_id: number;
}

export interface DeliveriesState {
  deliveries: DefaultSchema<Deliveries>;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchDeliveries = (deliveriesId?: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_DELIVERIES_START = "FETCH_DELIVERIES_START";
export const FETCH_DELIVERIES_SUCCESS = "FETCH_DELIVERIES_SUCCESS";
export const FETCH_DELIVERIES_FAILED = "FETCH_DELIVERIES_FAILED";

export const FETCH_RANDOM_DELIVERIES_START = "FETCH_RANDOM_DELIVERIES_START";
export const FETCH_RANDOM_DELIVERIES_SUCCESS =
  "FETCH_RANDOM_DELIVERIES_SUCCESS";
export const FETCH_RANDOM_DELIVERIES_FAILED = "FETCH_RANDOM_DELIVERIES_FAILED";

// ------ TYPES ------ //
interface FetchDeliveriesSuccess {
  type: typeof FETCH_DELIVERIES_SUCCESS;
  data: {
    deliveries: DeliveriesState;
  };
}

interface FetchRandomDeliveriesSuccess {
  type: typeof FETCH_RANDOM_DELIVERIES_SUCCESS;
  data: Deliveries;
}

export type Types = FetchDeliveriesSuccess | FetchRandomDeliveriesSuccess;
