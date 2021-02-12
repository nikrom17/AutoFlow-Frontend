import { combineReducers } from 'redux';
import {
  // initialTodosState,
  todosReducer,
} from 'src/redux/reducers/todosReducer';
import {
  // initialSalesFunnelsState,
  salesFunnelsReducer,
} from 'src/redux/reducers/salesFunnelsReducer';
import {
  // initialLeadsState,
  leadsReducer,
} from 'src/redux/reducers/leadsReducer';
// import { LeadsState } from 'src/redux/types/leadsTypes';
// import { TodosState } from 'src/redux/types/todosTypes';
// import { SalesFunnelsState } from './types/salesFunnelsTypes';

// interface AppState extends LeadsState, SalesFunnelsState, TodosState {}

// export const initialAppState: AppState = {
//   ...initialLeadsState,
//   ...initialSalesFunnelsState,
//   ...initialTodosState,
// };

export const rootReducer = combineReducers({
  leads: leadsReducer,
  salesFunnels: salesFunnelsReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
