import { combineReducers } from 'redux';
import { funnelStepsReducer } from 'src/redux/funnelSteps/funnelStepsReducer';
import { leadsReducer } from 'src/redux/leads/leadsReducer';
import { opportunitiesReducer } from 'src/redux/opportunities/opportunitiesReducer';
import { todosReducer } from 'src/redux/todos/todosReducer';

export const rootReducer = combineReducers({
  funnelSteps: funnelStepsReducer,
  leads: leadsReducer,
  opportunities: opportunitiesReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
