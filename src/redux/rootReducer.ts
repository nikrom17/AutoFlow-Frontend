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
  initialClientsState,
  clientsReducer,
} from "src/redux/reducers/clientsReducer";
import { ClientsState } from "src/redux/types/clientsTypes";
import { TodosState } from "src/redux/types/todosTypes";
import { LocationsState } from "src/redux/types/locationsTypes";

export interface AppState {
  clients: ClientsState;
  todos: TodosState;
  locations: LocationsState;
}

export const initialAppState: AppState = {
  clients: { ...initialClientsState },
  todos: { ...initialTodosState },
  locations: { ...initialLocationsState },
};

export const rootReducer = combineReducers({
  clients: clientsReducer,
  todos: todosReducer,
  locations: locationsReducer,
});
