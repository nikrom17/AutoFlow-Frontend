import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';

const getFunnelStepsStatus = (state: RootState) => state.funnelSteps.status;
const getLeadsStatus = (state: RootState) => state.leads.status;
const getOpportunitiesStatus = (state: RootState) => state.opportunities.name.status;
const getOpportunityInfoStatus = (state: RootState) => state.opportunities.info.status;
const getTodosStatus = (state: RootState) => state.todos.status;

export const getIsFetching = createSelector(
  getFunnelStepsStatus,
  getLeadsStatus,
  getOpportunitiesStatus,
  getOpportunityInfoStatus,
  getTodosStatus,
  (
    funnelStepsStatus,
    leadsStatus,
    opportunitiesStatus,
    opportunityInfoStatus,
    todosStatus
  ) =>
    [
      funnelStepsStatus,
      leadsStatus,
      opportunitiesStatus,
      opportunityInfoStatus,
      todosStatus,
    ].includes('fetching')
);

const getFunnelStepsError = (state: RootState) => state.funnelSteps.error;
const getLeadsError = (state: RootState) => state.leads.error;
const getOpportunitiesError = (state: RootState) => state.opportunities.name.error;
const getOpportunityInfoError = (state: RootState) => state.opportunities.info.error;
const getTodosError = (state: RootState) => state.todos.error;

export const getErrors = createSelector(
  getFunnelStepsError,
  getLeadsError,
  getOpportunitiesError,
  getOpportunityInfoError,
  getTodosError,
  (
    funnelStepsError,
    leadsError,
    opportunitiesError,
    opportunityInfoError,
    todosError
  ) => {
    const errors = {
      ...(funnelStepsError && { funnelStepsError }),
      ...(leadsError && { leadsError }),
      ...(opportunitiesError && { opportunitiesError }),
      ...(opportunityInfoError && { opportunityInfoError }),
      ...(todosError && { todosError }),
    };

    return errors;
  }
);
