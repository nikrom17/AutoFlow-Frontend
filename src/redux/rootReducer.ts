import { combineReducers } from "redux";
import {
  initialDeliveriesState,
  deliveriesReducer,
} from "src/redux/reducers/deliveriesReducer";
import {
  initialLocationsState,
  locationsReducer,
} from "src/redux/reducers/locationsReducer";
import {
  initialClientsState,
  clientsReducer,
} from "src/redux/reducers/clientsReducer";
import { ClientsState } from "src/redux/types/clientsTypes";
import { DeliveriesState } from "src/redux/types/deliveriesTypes";
import { LocationsState } from "src/redux/types/locationsTypes";

export interface AppState {
  clients: ClientsState;
  deliveries: DeliveriesState;
  locations: LocationsState;
}

export const initialAppState: AppState = {
  clients: { ...initialClientsState },
  deliveries: { ...initialDeliveriesState },
  locations: { ...initialLocationsState },
};

export const rootReducer = combineReducers({
  clients: clientsReducer,
  deliveries: deliveriesReducer,
  locations: locationsReducer,
});
