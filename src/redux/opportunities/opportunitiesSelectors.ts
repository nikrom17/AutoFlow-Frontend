import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';

const getOpportunityInfos = (state: RootState) => state.opportunities.info;

export const getTotalOpportunityValue = createSelector(
  getOpportunityInfos,
  (opportunityInfos) => {
    const isStoreEmpty = !opportunityInfos.allIds.length;

    return isStoreEmpty
      ? undefined
      : opportunityInfos.allIds.reduce(
          (sum: number, opportunityInfoId: number): number => {
            const opportunityInfo = opportunityInfos.byId[opportunityInfoId];

            return (sum += opportunityInfo.quotedPrice);
          },
          0
        );
  }
);
