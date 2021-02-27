// import { cloneDeep } from "lodash";
import * as funnelStepsTypes from './funnelStepsTypes';

export const initialFunnelStepsState: funnelStepsTypes.FunnelStepsState = {
  allIds: [1, 2, 3, 4],
  byId: {
    1: {
      id: 1,
      name: 'Initial Inquiry',
      opportunity: 1,
      leads: [1, 2, 3],
    },
    2: {
      id: 2,
      name: 'Took Questionnaire',
      opportunity: 1,
      leads: [4],
    },
    3: {
      id: 3,
      name: 'Scheduled Phone Consult',
      opportunity: 1,
      leads: [5],
    },
    4: {
      id: 4,
      name: 'Has Phone Consult',
      opportunity: 1,
      leads: [],
    },
    5: {
      id: 5,
      name: 'Initial Inquiry - Business',
      opportunity: 2,
      leads: [6, 7],
    },
    6: {
      id: 6,
      name: 'Took Questionnaire - Business',
      opportunity: 2,
      leads: [8],
    },
    7: {
      id: 7,
      name: 'Scheduled Phone Consult - Business',
      opportunity: 2,
      leads: [9],
    },
    8: {
      id: 8,
      name: 'Has Phone Consult - Business',
      opportunity: 2,
      leads: [],
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
