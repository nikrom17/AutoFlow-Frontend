import { createSelector } from 'reselect';
import { LeadsState } from 'src/redux/types/leadsTypes';
import { RootState } from 'src/redux/rootReducer';
import { FunnelStepsState } from '../types/funnelStepsTypes';
import { OpportunitiesState } from '../types/opportunitiesTypes';

const getFunnelSteps = (state: RootState) => state.funnelSteps;
const getLeads = (state: RootState) => state.leads;
const getOpportunities = (state: RootState) => state.opportunities;

const transformLeadsTableData = (
  funnelSteps: FunnelStepsState,
  leads: LeadsState,
  opportunities: OpportunitiesState
) =>
  leads.allIds.map((id) => {
    const lead = leads.byId[id];
    const funnelStep = funnelSteps.byId[lead.funnelStep];
    const opportunity = opportunities.name.byId[funnelStep.opportunity];
    const opportunityInfo = opportunities.info.byId[id];

    return {
      ...lead,
      funnelStep,
      opportunity: { ...opportunity, info: opportunityInfo },
    };
  });

export const getLeadsTableData = createSelector(
  getFunnelSteps,
  getLeads,
  getOpportunities,
  (funnelSteps, leads, opportunities) =>
    transformLeadsTableData(funnelSteps, leads, opportunities)
);
