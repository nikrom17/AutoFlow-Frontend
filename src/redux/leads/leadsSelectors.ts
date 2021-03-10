import { createSelector } from 'reselect';
import { FunnelStepsState } from 'src/redux/funnelSteps/funnelStepsTypes';
import { LeadsState, Leads } from 'src/redux/leads/leadsTypes';
import { OpportunitiesState } from 'src/redux/opportunities/opportunitiesTypes';
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
) => {
  const isStoreEmpty =
    !leads.allIds.length ||
    !funnelSteps.allIds.length ||
    !opportunities.name.allIds.length ||
    !opportunities.info.allIds.length;

  if (!isStoreEmpty) {
    return leads.allIds.map((id) => {
      const lead = leads.byId[id];
      const funnelStep = funnelSteps.byId[lead.funnelStepId];
      const opportunity = opportunities.name.byId[funnelStep.opportunityId];
      const opportunityInfo = opportunities.info.byId[id];

      return {
        ...lead,
        funnelStep,
        opportunity: { ...opportunity, info: opportunityInfo },
      };
    });
  }
  return [];
};

const transformLeadDetailsData = (lead: Leads, opportunityInfo: any) => {
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

export const getNumberOfLeads = createSelector(getLeads, (leads) => {
  const isStoreEmpty = !leads.allIds.length;

  return isStoreEmpty ? undefined : leads.allIds.length;
});
