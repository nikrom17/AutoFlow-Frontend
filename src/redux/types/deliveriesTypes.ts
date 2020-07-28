import { ThunkType, DefaultSchema } from "./commonTypes";

// ------ COMMON INTERFACES ------ //
export interface Deliveries {
  id: number;
  clientId: number;
  date_created: Date;
  item: string;
  notes: string;
  date_fulfilled: Date;
  pickup_location_id: number;
  dropoff_location_id: number;
}

export interface DeliveriesState {
  deliveries: DefaultSchema<Deliveries>;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchDeliveries = () => ThunkType;
export type FetchClientDeliveries = (clientId: number) => ThunkType;
export type FetchDelivery = (DeliveryId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_DELIVERIES_START = "FETCH_DELIVERIES_START";
export const FETCH_DELIVERIES_SUCCESS = "FETCH_DELIVERIES_SUCCESS";
export const FETCH_DELIVERIES_FAILED = "FETCH_DELIVERIES_FAILED";

export const FETCH_CLIENT_DELIVERIES_START = "FETCH_CLIENT_DELIVERIES_START";
export const FETCH_CLIENT_DELIVERIES_SUCCESS =
  "FETCH_CLIENT_DELIVERIES_SUCCESS";
export const FETCH_CLIENT_DELIVERIES_FAILED = "FETCH_CLIENT_DELIVERIES_FAILED";

export const FETCH_DELIVERY_START = "FETCH_DELIVERY_START";
export const FETCH_DELIVERY_SUCCESS = "FETCH_DELIVERY_SUCCESS";
export const FETCH_DELIVERY_FAILED = "FETCH_DELIVERY_FAILED";

// ------ TYPES ------ //
interface FetchDeliveriesSuccess {
  type: typeof FETCH_DELIVERIES_SUCCESS;
  data: DeliveriesState;
}

interface FetchClientDeliveriesSuccess {
  type: typeof FETCH_CLIENT_DELIVERIES_SUCCESS;
  data: DeliveriesState;
}

interface FetchDeliverySuccess {
  type: typeof FETCH_DELIVERY_SUCCESS;
  data: DeliveriesState;
}

export type Types =
  | FetchDeliveriesSuccess
  | FetchClientDeliveriesSuccess
  | FetchDeliverySuccess;
