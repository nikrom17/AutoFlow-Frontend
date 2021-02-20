import { createSelector } from 'reselect';
import { DefaultSchema } from 'src/redux/types/commonTypes';
import { FunnelStepsState } from 'src/redux/types/funnelStepsTypes';
import { LeadsState, Leads } from 'src/redux/types/leadsTypes';
import { OpportunitiesState } from 'src/redux/types/opportunitiesTypes';
import { RootState } from 'src/redux/rootReducer';

const getFunnelSteps = (state: RootState) => state.funnelSteps;
const getLeads = (state: RootState) => state.leads;
const getLeadById = (state: RootState, leadId: number) => state.leads.byId[leadId];
const getOpportunities = (state: RootState) => state.opportunities;
const getOpportunityInfoById = (state: RootState, leadId: number) =>
  state.opportunities.info.byId[leadId];

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

const transformLeadDetailsData = (lead: Leads, opportunityInfo: DefaultSchema<any>) => {
  return { ...lead, opportunityInfo: opportunityInfo };
};

export const getLeadsTableData = createSelector(
  getFunnelSteps,
  getLeads,
  getOpportunities,
  (funnelSteps, leads, opportunities) =>
    transformLeadsTableData(funnelSteps, leads, opportunities)
);

export const getLeadDetails = createSelector(
  getLeadById,
  getOpportunityInfoById,
  (lead, opportunityInfo) => transformLeadDetailsData(lead, opportunityInfo)
);
