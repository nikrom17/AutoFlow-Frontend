import { combineReducers } from "redux";
import {
  initialTodosState,
  todosReducer,
} from "src/redux/reducers/todosReducer";
import {
  initialSalesFunnelsState,
  salesFunnelsReducer,
} from "src/redux/reducers/salesFunnelsReducer";
import {
  initialLocationsState,
  locationsReducer,
} from "src/redux/reducers/locationsReducer";
import {
  initialLeadsState,
  leadsReducer,
} from "src/redux/reducers/leadsReducer";
import { LeadsState } from "src/redux/types/leadsTypes";
import { TodosState } from "src/redux/types/todosTypes";
import { LocationsState } from "src/redux/types/locationsTypes";
import { SalesFunnelsState } from "./types/salesFunnelsTypes";

export interface AppState {
  leads: LeadsState;
  locations: LocationsState;
  salesFunnels: SalesFunnelsState;
  todos: TodosState;
}

export const initialAppState: AppState = {
  leads: { ...initialLeadsState },
  locations: { ...initialLocationsState },
  salesFunnels: { ...initialSalesFunnelsState},
  todos: { ...initialTodosState },
};

export const rootReducer = combineReducers({
  leads: leadsReducer,
  locations: locationsReducer,
  salesFunnels: salesFunnelsReducer,
  todos: todosReducer,
});
