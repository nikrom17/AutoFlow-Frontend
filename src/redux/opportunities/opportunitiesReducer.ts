import { cloneDeep } from 'lodash';
import * as opportunitiesTypes from './opportunitiesTypes';

export const initialOpportunitiesState: opportunitiesTypes.OpportunitiesState = {
  name: {
    allIds: [],
    byId: {},
  },
  info: {
    allIds: [],
    byId: {},
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
    case opportunitiesTypes.FETCH_OPPORTUNITY_INFOS_SUCCESS:
      return {
        ...state,
        info: {
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
    case opportunitiesTypes.FETCH_OPPORTUNITY_INFO_SUCCESS:
      return {
        ...state,
        info: {
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
