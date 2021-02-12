import { cloneDeep } from 'lodash';
import * as leadsTypes from '../types/leadsTypes';

export const initialLeadsState: leadsTypes.LeadsState = {
  allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  byId: {
    1: {
      id: 1,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
    2: {
      id: 2,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
    3: {
      id: 3,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
    4: {
      id: 4,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
    5: {
      id: 5,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
    6: {
      id: 6,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
    7: {
      id: 7,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
    8: {
      id: 8,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
    9: {
      id: 9,
      address: '1918 N Michigan Ave\nUnit 1010\n Chicago, IL 60612',
      chanceToConvert: 0.923,
      email: 'coolDude@gmail.com',
      lastComm: '1 hour ago',
      name: 'Johnathon Leaderson',
      opportunityInfo: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      phone: '(847) 460-8607',
    },
  },
};

export const leadsReducer = (
  state = initialLeadsState,
  action: leadsTypes.Types
): leadsTypes.LeadsState => {
  switch (action.type) {
    case leadsTypes.FETCH_LEADS_SUCCESS:
      return { ...action.data };
    case leadsTypes.FETCH_LEAD_SUCCESS: //todo verify allIds is merged correctly
      return {
        allIds: [...state.allIds, ...action.data.allIds],
        byId: {
          ...cloneDeep(state.byId),
          ...action.data.byId,
        },
      };
    default:
      return state;
  }
};
