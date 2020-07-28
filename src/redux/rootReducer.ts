import { combineReducers } from "redux";
import {
  initialDeliveriesState,
  deliveriesReducer,
} from "src/redux/reducers/deliveriesReducer";
import {
  initialLocationsState,
  locationsReducer,
} from "src/redux/reducers/locationsReducer";
import { DeliveriesState } from "src/redux/types/deliveriesTypes";
import { LocationsState } from "src/redux/types/locationsTypes";

export interface AppState {
  deliveries: DeliveriesState;
  locations: LocationsState;
}

export const initialAppState: AppState = {
  deliveries: { ...initialDeliveriesState },
  locations: { ...initialLocationsState },
};

export const rootReducer = combineReducers({
  deliveries: deliveriesReducer,
  locations: locationsReducer,
});
