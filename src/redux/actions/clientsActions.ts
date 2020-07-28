import * as clientsTypes from "../types/clientsTypes";
import api from "src/api/api";

// ------ SIMPLE ACTIONS ------ //

// fetch all clients
export const fetchClientsStart = () => ({
  type: clientsTypes.FETCH_CLIENTS_START,
});

export const fetchClientsSuccess = (data: clientsTypes.ClientsState) => ({
  type: clientsTypes.FETCH_CLIENTS_SUCCESS,
  data,
});

export const fetchClientsFailed = () => ({
  type: clientsTypes.FETCH_CLIENTS_FAILED,
});

// fetch a single client
export const fetchClientStart = () => ({
  type: clientsTypes.FETCH_CLIENT_START,
});

export const fetchClientSuccess = (data: clientsTypes.ClientsState) => ({
  type: clientsTypes.FETCH_CLIENT_SUCCESS,
  data,
});

export const fetchClientFailed = () => ({
  type: clientsTypes.FETCH_CLIENT_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

// Admin

// fetch all clients
export const fetchClients: clientsTypes.FetchClients = () => async (
  dispatch
) => {
  try {
    dispatch(fetchClientsStart());
    const response = await api.get("clients");
    dispatch(fetchClientsSuccess(response));
  } catch (error) {
    dispatch(fetchClientsFailed());
  }
};

// fetch a single client
export const fetchClient: clientsTypes.FetchClient = (
  clientId: number
) => async (dispatch) => {
  try {
    dispatch(fetchClientStart());
    const response = await api.get(`clients/${clientId}`);
    dispatch(fetchClientSuccess(response));
  } catch (error) {
    dispatch(fetchClientFailed());
  }
};
