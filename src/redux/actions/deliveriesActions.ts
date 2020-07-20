import * as deliveriesTypes from "../types/deliveriesTypes";
import api from "src/api/api";

// ------ SIMPLE ACTIONS ------ //

// fetch all deliveries
export const fetchDeliveriesStart = () => ({
  type: deliveriesTypes.FETCH_DELIVERIES_START,
});

export const fetchDeliveriesSuccess = (
  data: deliveriesTypes.DeliveriesState
) => ({
  type: deliveriesTypes.FETCH_DELIVERIES_SUCCESS,
  data,
});

export const fetchDeliveriesFailed = () => ({
  type: deliveriesTypes.FETCH_DELIVERIES_FAILED,
});

// fetch all deliveries for a client
export const fetchClientDeliveriesStart = () => ({
  type: deliveriesTypes.FETCH_CLIENT_DELIVERIES_START,
});

export const fetchClientDeliveriesSuccess = (
  data: deliveriesTypes.DeliveriesState
) => ({
  type: deliveriesTypes.FETCH_CLIENT_DELIVERIES_SUCCESS,
  data,
});

export const fetchClientDeliveriesFailed = () => ({
  type: deliveriesTypes.FETCH_CLIENT_DELIVERIES_FAILED,
});

// fetch a single delivery
export const fetchDeliveryStart = () => ({
  type: deliveriesTypes.FETCH_DELIVERY_START,
});

export const fetchDeliverySuccess = (
  data: deliveriesTypes.DeliveriesState
) => ({
  type: deliveriesTypes.FETCH_DELIVERY_SUCCESS,
  data,
});

export const fetchDeliveryFailed = () => ({
  type: deliveriesTypes.FETCH_DELIVERY_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

// Admin

export const fetchDeliveries: deliveriesTypes.FetchDeliveries = () => async (
  dispatch
) => {
  try {
    dispatch(fetchDeliveriesStart());
    const response = api.get("deliveries");
    dispatch(fetchDeliveriesSuccess(response));
  } catch (error) {
    dispatch(fetchDeliveriesFailed());
    //todo handle error
  }
};

// Client

export const fetchClientDeliveries: deliveriesTypes.FetchClientDeliveries = (
  clientId: number
) => async (dispatch) => {
  try {
    dispatch(fetchClientDeliveriesStart());
    const response = api.get(`deliveries/client/${clientId}`);
    dispatch(fetchClientDeliveriesSuccess(response));
  } catch (error) {
    dispatch(fetchClientDeliveriesFailed());
    //todo handle error
  }
};

// Both

export const fetchDelivery: deliveriesTypes.FetchDelivery = (
  deliveryId: number
) => async (dispatch) => {
  try {
    dispatch(fetchDeliveryStart());
    const response = api.get(`deliveries/${deliveryId}`);
    dispatch(fetchDeliverySuccess(response));
  } catch (error) {
    dispatch(fetchDeliveryFailed());
    //todo handle error
  }
};