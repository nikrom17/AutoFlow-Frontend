import { cloneDeep } from 'lodash';
import * as leadsTypes from './leadsTypes';

export const initialLeadsState: leadsTypes.LeadsState = {
  allIds: [],
  byId: {},
  status: 'idle',
  error: null,
};

export const leadsReducer = (
  state = initialLeadsState,
  action: leadsTypes.Types
): leadsTypes.LeadsState => {
  switch (action.type) {
    case leadsTypes.FETCH_LEADS_SUCCESS:
      return { ...action.data.leads, status: 'idle', error: null };
    case leadsTypes.FETCH_LEAD_SUCCESS:
      return {
        allIds: [...state.allIds, ...action.data.leads.allIds],
        byId: {
          ...cloneDeep(state.byId),
          ...action.data.leads.byId,
        },
        status: 'idle',
        error: null,
      };
    default:
      return state;
  }
};
