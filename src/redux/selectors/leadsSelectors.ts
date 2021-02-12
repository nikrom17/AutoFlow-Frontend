import { createSelector } from 'reselect';
import { TodosState } from 'src/redux/types/todosTypes';
import { LeadsState } from 'src/redux/types/leadsTypes';
import { RootState } from 'src/redux/rootReducer';

const getTodos = (state: RootState) => state.todos;
const getLeads = (state: RootState) => state.leads;

const transformLeadsTableData = (todos: TodosState, leads: LeadsState) =>
  todos.allIds.map((id) => {
    const todo = todos.byId[id];
    const lead = leads.byId[todo.leadId];

    return { ...todo, lead };
  });

export const getLeadsTableData = createSelector(
  getTodos,
  getLeads,
  (todos, leads) => transformLeadsTableData(todos, leads)
);
