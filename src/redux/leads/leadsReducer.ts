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
    // ------- Start -------- //
    case leadsTypes.FETCH_LEADS_START:
    case leadsTypes.FETCH_LEAD_START:
    case leadsTypes.ADD_LEAD_START:
      return {
        ...state,
        status: 'fetching',
      };

    // ------- Success -------- //
    case leadsTypes.FETCH_LEADS_SUCCESS:
      return { ...action.data.leads, status: 'idle', error: null };
    case leadsTypes.FETCH_LEAD_SUCCESS:
    case leadsTypes.ADD_LEAD_SUCCESS:
      return {
        allIds: [...state.allIds, ...action.data.leads.allIds],
        byId: {
          ...cloneDeep(state.byId),
          ...action.data.leads.byId,
        },
        status: 'idle',
        error: null,
      };
    // ------- Failed -------- //
    case leadsTypes.FETCH_LEADS_FAILED:
    case leadsTypes.FETCH_LEAD_FAILED:
    case leadsTypes.ADD_LEAD_FAILED:
      return {
        ...state,
        status: 'idle',
        error: action.error,
      };
    default:
      return state;
  }
};
