import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';

const getFunnelSteps = (state: RootState) => state.funnelSteps;
const getOpportunityNames = (state: RootState) => state.opportunities.name;

export const getSalesFunnelCascaderOptions = createSelector(
  getFunnelSteps,
  getOpportunityNames,
  (funnelSteps, opportunities) => {
    const cascaderOptions: any = [];

    const isStoreEmpty = !funnelSteps.allIds.length || !opportunities.allIds.length;

    const createOpportunityOption = (opportunityName: string, opportunityId: number) => ({
      label: opportunityName,
      value: opportunityId,
      children: [],
    });

    const createFunnelStepOption = (funnelStepName: string, funnelStepId: number) => ({
      label: funnelStepName,
      value: funnelStepId,
    });

    if (!isStoreEmpty) {
      const cascaderOptionsObj: any = {};

      opportunities.allIds.forEach((opportunityId) => {
        const opportunity = opportunities.byId[opportunityId];
        const opportunityOption = createOpportunityOption(
          opportunity.name,
          opportunity.id
        );
        cascaderOptionsObj[opportunityId] = opportunityOption;
      });

      funnelSteps.allIds.forEach((funnelStepId) => {
        const funnelStep = funnelSteps.byId[funnelStepId];
        const funnelStepOption = createFunnelStepOption(funnelStep.name, funnelStep.id);
        cascaderOptionsObj[funnelStep.opportunityId].children.push(funnelStepOption);
      });

      for (const [, option] of Object.entries(cascaderOptionsObj)) {
        cascaderOptions.push(option);
      }
    }
    return cascaderOptions;
  }
);
