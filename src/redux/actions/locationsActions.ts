import * as locationsTypes from "../types/locationsTypes";
import api from "src/api/api";

// ------ SIMPLE ACTIONS ------ //

// fetch all locations
export const fetchLocationsStart = () => ({
  type: locationsTypes.FETCH_LOCATIONS_START,
});

export const fetchLocationsSuccess = (data: locationsTypes.LocationsState) => ({
  type: locationsTypes.FETCH_LOCATIONS_SUCCESS,
  data,
});

export const fetchLocationsFailed = () => ({
  type: locationsTypes.FETCH_LOCATIONS_FAILED,
});

// fetch all locations for a client
export const fetchClientLocationsStart = () => ({
  type: locationsTypes.FETCH_CLIENT_LOCATIONS_START,
});

export const fetchClientLocationsSuccess = (
  data: locationsTypes.LocationsState
) => ({
  type: locationsTypes.FETCH_CLIENT_LOCATIONS_SUCCESS,
  data,
});

export const fetchClientLocationsFailed = () => ({
  type: locationsTypes.FETCH_CLIENT_LOCATIONS_FAILED,
});

// fetch a single location
export const fetchLocationStart = () => ({
  type: locationsTypes.FETCH_LOCATION_START,
});

export const fetchLocationSuccess = (data: locationsTypes.LocationsState) => ({
  type: locationsTypes.FETCH_LOCATION_SUCCESS,
  data,
});

export const fetchLocationFailed = () => ({
  type: locationsTypes.FETCH_LOCATION_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

// Admin

// fetch all locations
export const fetchLocations: locationsTypes.FetchLocations = () => async (
  dispatch
) => {
  try {
    dispatch(fetchLocationsStart());
    const response = await api.get("locations");
    dispatch(fetchLocationsSuccess(response));
  } catch (error) {
    dispatch(fetchLocationsFailed());
  }
};

// Client

// fetch all locations for a client
export const fetchClientLocations: locationsTypes.FetchClientLocations = (
  clientId: number
) => async (dispatch) => {
  try {
    dispatch(fetchClientLocationsStart());
    const response = await api.get(`locations/client/${clientId}`);
    dispatch(fetchClientLocationsSuccess(response));
  } catch (error) {
    dispatch(fetchClientLocationsFailed());
  }
};

// Both

// fetch a single location
export const fetchLocation: locationsTypes.FetchLocation = (
  locationId: number
) => async (dispatch) => {
  try {
    dispatch(fetchLocationStart());
    const response = await api.get(`locations/${locationId}`);
    dispatch(fetchLocationSuccess(response));
  } catch (error) {
    dispatch(fetchLocationFailed());
  }
};
