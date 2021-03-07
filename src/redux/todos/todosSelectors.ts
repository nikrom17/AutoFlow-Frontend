import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';

const getTodos = (state: RootState) => state.todos;
const getLeads = (state: RootState) => state.leads;
const getFunnelSteps = (state: RootState) => state.funnelSteps;
const getOpportunities = (state: RootState) => state.opportunities;

export const getTodosTableData = createSelector(
  getTodos,
  getLeads,
  getFunnelSteps,
  getOpportunities,
  (todos, leads, funnelSteps, opportunities) => {
    const isStoreEmpty =
      !leads.allIds.length ||
      !funnelSteps.allIds.length ||
      !opportunities.name.allIds.length ||
      !opportunities.info.allIds.length;

    return isStoreEmpty
      ? []
      : todos.allIds.map((id) => {
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
  }
);
