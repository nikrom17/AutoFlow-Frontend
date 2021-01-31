import { combineReducers } from "redux";
import {
  initialTodosState,
  todosReducer,
} from "src/redux/reducers/todosReducer";
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

export interface AppState {
  leads: LeadsState;
  todos: TodosState;
  locations: LocationsState;
}

export const initialAppState: AppState = {
  leads: { ...initialLeadsState },
  todos: { ...initialTodosState },
  locations: { ...initialLocationsState },
};

export const rootReducer = combineReducers({
  leads: leadsReducer,
  todos: todosReducer,
  locations: locationsReducer,
});
