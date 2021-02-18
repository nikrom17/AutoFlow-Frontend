import { combineReducers } from 'redux';
import { funnelStepsReducer } from 'src/redux/reducers/funnelStepsReducer';
import { leadsReducer } from 'src/redux/reducers/leadsReducer';
import { opportunitiesReducer } from 'src/redux/reducers/opportunitiesReducer';
import { todosReducer } from 'src/redux/reducers/todosReducer';

export const rootReducer = combineReducers({
  funnelSteps: funnelStepsReducer,
  leads: leadsReducer,
  opportunities: opportunitiesReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
