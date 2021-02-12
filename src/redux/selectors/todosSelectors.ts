import { createSelector } from 'reselect';
import { TodosState } from 'src/redux/types/todosTypes';
import { LeadsState } from 'src/redux/types/leadsTypes';
import { RootState } from 'src/redux/rootReducer';

const getTodos = (state: RootState) => state.todos;
const getLeads = (state: RootState) => state.leads;

const transformTodosTableData = (todos: TodosState, leads: LeadsState) =>
  todos.allIds.map((id) => {
    const todo = todos.byId[id];
    const lead = leads.byId[todo.leadId];

    return { ...todo, lead };
  });

export const getTodosTableData = createSelector(
  getTodos,
  getLeads,
  (todos, leads) => transformTodosTableData(todos, leads)
);
