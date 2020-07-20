import * as deliveriesTypes from "../types/deliveriesTypes";
import api from "src/api/api";

// ------ SIMPLE ACTIONS ------ //
export const fetchDeliveriesStart = () => ({
  type: deliveriesTypes.FETCH_DELIVERIES_START,
});

export const fetchDeliveriesSuccess = (data: any) => ({
  type: deliveriesTypes.FETCH_DELIVERIES_SUCCESS,
  data,
});

export const fetchDeliveriesFailed = () => ({
  type: deliveriesTypes.FETCH_DELIVERIES_FAILED,
});

export const fetchClientDeliveriesStart = () => ({
  type: deliveriesTypes.FETCH_CLIENT_DELIVERIES_START,
});

export const fetchClientDeliveriesSuccess = (data: any) => ({
  type: deliveriesTypes.FETCH_CLIENT_DELIVERIES_SUCCESS,
  data,
});

export const fetchClientDeliveriesFailed = () => ({
  type: deliveriesTypes.FETCH_CLIENT_DELIVERIES_FAILED,
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

export const fetchClientDeliveries: deliveriesTypes.FetchDeliveries = (
  clientId: number
) => async (dispatch) => {
  try {
    dispatch(fetchDeliveriesStart());
    const response = api.get("deliveries");
    dispatch(fetchDeliveriesSuccess(response));
  } catch (error) {
    dispatch(fetchDeliveriesFailed());
    //todo handle error
  }
};
