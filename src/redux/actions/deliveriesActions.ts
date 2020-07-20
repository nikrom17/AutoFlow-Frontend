import * as deliveriesActionTypes from "../actionTypes/deliveriesActionTypes";
import api from "src/api/api";
import { GenericThunkAction } from "../actionTypes/commonTypes";

const BASE_URL = "https://pokeapi.co/api/v2/deliveries";

// ------ SIMPLE ACTIONS ------ //
export const fetchDeliveriesStart = () => ({
  type: deliveriesActionTypes.FETCH_DELIVERIES_START,
});

export const fetchDeliveriesSuccess = (data: any) => ({
  type: deliveriesActionTypes.FETCH_DELIVERIES_SUCCESS,
  data,
});

export const fetchDeliveriesFailed = () => ({
  type: deliveriesActionTypes.FETCH_DELIVERIES_FAILED,
});

export const fetchRandomDeliveriesStart = () => ({
  type: deliveriesActionTypes.FETCH_RANDOM_DELIVERIES_START,
});

export const fetchRandomDeliveriesSuccess = (data: any) => ({
  type: deliveriesActionTypes.FETCH_RANDOM_DELIVERIES_SUCCESS,
  data,
});

export const fetchRandomDeliveriesFailed = () => ({
  type: deliveriesActionTypes.FETCH_RANDOM_DELIVERIES_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

export const fetchDeliveries: deliveriesActionTypes.FetchDeliveries = (
  clientId
) => async (dispatch) => {
  try {
    dispatch(fetchDeliveriesStart());
    const response = api.get(`deliveries/${clientId}`);
    dispatch(fetchDeliveriesSuccess(response));
  } catch (error) {
    dispatch(fetchDeliveriesFailed());
    //todo handle error
  }
};
