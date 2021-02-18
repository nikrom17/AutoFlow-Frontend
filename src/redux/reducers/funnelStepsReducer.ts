// import { cloneDeep } from "lodash";
import * as funnelStepsTypes from '../types/funnelStepsTypes';

export const initialFunnelStepsState: funnelStepsTypes.FunnelStepsState = {
  allIds: [1, 2, 3, 4],
  byId: {
    1: {
      id: 1,
      name: 'Initial Inquiry',
      opportunity: 1,
    },
    2: {
      id: 2,
      name: 'Took Questionnaire',
      opportunity: 1,
    },
    3: {
      id: 3,
      name: 'Scheduled Phone Consult',
      opportunity: 1,
    },
    4: {
      id: 4,
      name: 'Has Phone Consult',
      opportunity: 1,
    },
    5: {
      id: 5,
      name: 'Initial Inquiry',
      opportunity: 2,
    },
    6: {
      id: 6,
      name: 'Took Questionnaire',
      opportunity: 2,
    },
    7: {
      id: 7,
      name: 'Scheduled Phone Consult',
      opportunity: 2,
    },
    8: {
      id: 8,
      name: 'Has Phone Consult',
      opportunity: 2,
    },
  },
};

export const funnelStepsReducer = (
  state = initialFunnelStepsState,
  action: any
): funnelStepsTypes.FunnelStepsState => {
  switch (action.type) {
    default:
      return state;
  }
};
