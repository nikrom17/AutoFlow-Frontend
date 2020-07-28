import { cloneDeep } from "lodash";
import * as locationsTypes from "../types/locationsTypes";

export const initialLocationsState: locationsTypes.LocationsState = {
  locations: {
    allIds: [],
    byId: {},
  },
};

export const locationsReducer = (
  state = initialLocationsState,
  action: locationsTypes.Types
): locationsTypes.LocationsState => {
  switch (action.type) {
    case locationsTypes.FETCH_LOCATIONS_SUCCESS:
    case locationsTypes.FETCH_CLIENT_LOCATIONS_SUCCESS:
      return {
        locations: { ...action.data.locations },
      };
    case locationsTypes.FETCH_LOCATION_SUCCESS:
      return {
        locations: {
          allIds: [...state.locations.allIds, ...action.data.locations.allIds],
          byId: {
            ...cloneDeep(state.locations.byId),
            ...action.data.locations.byId,
          },
        },
      };
    default:
      return state;
  }
};
