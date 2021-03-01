import { cloneDeep } from 'lodash';
import * as leadsTypes from './leadsTypes';

export const initialLeadsState: leadsTypes.LeadsState = {
  allIds: [],
  byId: {},
};

export const leadsReducer = (
  state = initialLeadsState,
  action: leadsTypes.Types
): leadsTypes.LeadsState => {
  switch (action.type) {
    case leadsTypes.FETCH_LEADS_SUCCESS:
      return { ...action.data.leads };
    case leadsTypes.FETCH_LEAD_SUCCESS:
      return {
        allIds: [...state.allIds, ...action.data.leads.allIds],
        byId: {
          ...cloneDeep(state.byId),
          ...action.data.leads.byId,
        },
      };
    default:
      return state;
  }
};
