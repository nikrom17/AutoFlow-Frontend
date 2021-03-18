import { cloneDeep } from 'lodash';
import * as funnelStepsTypes from './funnelStepsTypes';
import * as leadsTypes from '../leads/leadsTypes';

export const initialFunnelStepsState: funnelStepsTypes.FunnelStepsState = {
  allIds: [],
  byId: {},
  status: 'idle',
  error: null,
};

export const funnelStepsReducer = (
  state = initialFunnelStepsState,
  action: funnelStepsTypes.Types | leadsTypes.Types
): funnelStepsTypes.FunnelStepsState => {
  switch (action.type) {
    // ------- Start -------- //
    case funnelStepsTypes.FETCH_FUNNEL_STEPS_START:
    case funnelStepsTypes.FETCH_FUNNEL_STEP_START:
      return {
        ...state,
        status: 'fetching',
      };
    // ------- Success -------- //
    case funnelStepsTypes.FETCH_FUNNEL_STEPS_SUCCESS:
      return {
        ...action.data.funnelSteps,
        status: 'idle',
        error: null,
      };
    case funnelStepsTypes.FETCH_FUNNEL_STEP_SUCCESS:
    case leadsTypes.ADD_LEAD_SUCCESS:
      return {
        allIds: [...state.allIds, ...action.data.funnelSteps.allIds],
        byId: {
          ...cloneDeep(state.byId),
          ...action.data.funnelSteps.byId,
        },
        status: 'idle',
        error: null,
      };
    // ------- Failed -------- //
    case funnelStepsTypes.FETCH_FUNNEL_STEPS_FAILED:
    case funnelStepsTypes.FETCH_FUNNEL_STEP_FAILED:
      return {
        ...state,
        status: 'idle',
        error: action.error,
      };
    default:
      return state;
  }
};
