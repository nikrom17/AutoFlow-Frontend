import { cloneDeep } from 'lodash';
import * as funnelStepsTypes from './funnelStepsTypes';

export const initialFunnelStepsState: funnelStepsTypes.FunnelStepsState = {
  allIds: [],
  byId: {},
};

export const funnelStepsReducer = (
  state = initialFunnelStepsState,
  action: funnelStepsTypes.Types
): funnelStepsTypes.FunnelStepsState => {
  switch (action.type) {
    case funnelStepsTypes.FETCH_FUNNEL_STEPS_SUCCESS:
      return {
        ...action.data.funnelSteps,
      };
    case funnelStepsTypes.FETCH_FUNNEL_STEP_SUCCESS:
      return {
        allIds: [...state.allIds, ...action.data.funnelSteps.allIds],
        byId: {
          ...cloneDeep(state.byId),
          ...action.data.funnelSteps.byId,
        },
      };
    default:
      return state;
  }
};
