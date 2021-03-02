import { createSelector } from 'reselect';
import { TodosState } from 'src/redux/todos/todosTypes';
import { LeadsState } from 'src/redux/leads/leadsTypes';
import { OpportunitiesState } from 'src/redux/opportunities/opportunitiesTypes';
import { FunnelStepsState } from 'src/redux/funnelSteps/funnelStepsTypes';
import { RootState } from 'src/redux/rootReducer';

const getTodos = (state: RootState) => state.todos;
const getLeads = (state: RootState) => state.leads;
const getFunnelSteps = (state: RootState) => state.funnelSteps;
const getOpportunities = (state: RootState) => state.opportunities;

const transformTodosTableData = (
  todos: TodosState,
  leads: LeadsState,
  funnelSteps: FunnelStepsState,
  opportunities: OpportunitiesState
) =>
  todos.allIds.map((id) => {
    const todo = todos.byId[id];
    const lead = leads.byId[todo.leadId];
    const funnelStep = funnelSteps.byId[lead.funnelStepId];
    const opportunity = opportunities.name.byId[funnelStep.opportunityId];
    const opportunityInfo = opportunities.info.byId[id];

    return {
      ...todo,
      lead,
      funnelStep,
      opportunity: { ...opportunity, info: opportunityInfo },
    };
  });

export const getTodosTableData = createSelector(
  getTodos,
  getLeads,
  getFunnelSteps,
  getOpportunities,
  (todos, leads, funnelSteps, opportunities) =>
    transformTodosTableData(todos, leads, funnelSteps, opportunities)
);
