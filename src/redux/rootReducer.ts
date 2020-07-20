import { combineReducers } from "redux";
import {
  initialDeliveriesState,
  deliveriesReducer,
} from "src/redux/reducers/deliveriesReducer";
import { DeliveriesState } from "src/redux/actionTypes/deliveriesActionTypes";

export interface AppState {
  deliveries: DeliveriesState;
}

export const initialAppState: AppState = {
  deliveries: { ...initialDeliveriesState },
};

export const rootReducer = combineReducers({
  deliveries: deliveriesReducer,
});
