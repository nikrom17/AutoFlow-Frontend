import { cloneDeep } from 'lodash';
import * as opportunitiesTypes from './opportunitiesTypes';

export const initialOpportunitiesState: opportunitiesTypes.OpportunitiesState = {
  name: {
    allIds: [],
    byId: {},
  },
  info: {
    allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    byId: {
      1: {
        filingStatus: 'Single',
        occupation: 'Software Engineer',
        yearlyIncome: '$150k+',
        quotedPrice: '$150',
      },
      2: {
        filingStatus: 'Married',
        occupation: 'Business Analyst',
        yearlyIncome: '$150k+',
        quotedPrice: '$350',
      },
      3: {
        filingStatus: 'Head of Household',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$300',
      },
      4: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$105',
      },
      5: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$225',
      },
      6: {
        filingStatus: 'Married',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$300',
      },
      7: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$250',
      },
      8: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$150',
      },
      9: {
        filingStatus: 'Single',
        occupation: 'Senior Consultant',
        yearlyIncome: '$150k+',
        quotedPrice: '$200',
      },
    },
  },
};

export const opportunitiesReducer = (
  state = initialOpportunitiesState,
  action: opportunitiesTypes.Types
): opportunitiesTypes.OpportunitiesState => {
  switch (action.type) {
    case opportunitiesTypes.FETCH_OPPORTUNITIES_SUCCESS:
      return {
        ...state,
        name: {
          ...action.data.opportunities,
        },
      };
    case opportunitiesTypes.FETCH_OPPORTUNITY_SUCCESS:
      return {
        ...state,
        name: {
          allIds: [...state.name.allIds, ...action.data.opportunities.allIds],
          byId: {
            ...cloneDeep(state.name.byId),
            ...action.data.opportunities.byId,
          },
        },
      };
    default:
      return state;
  }
};
