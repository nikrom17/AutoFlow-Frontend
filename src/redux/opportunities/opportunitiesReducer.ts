import { cloneDeep } from 'lodash';
import * as opportunitiesTypes from './opportunitiesTypes';

export const initialOpportunitiesState: opportunitiesTypes.OpportunitiesState = {
  name: {
    allIds: [],
    byId: {},
    status: 'idle',
    error: null,
  },
  info: {
    allIds: [],
    byId: {},
    status: 'idle',
    error: null,
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
          status: 'idle',
          error: null,
        },
      };
    case opportunitiesTypes.FETCH_OPPORTUNITY_INFOS_SUCCESS:
      return {
        ...state,
        info: {
          ...action.data.opportunities,
          status: 'idle',
          error: null,
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
          status: 'idle',
          error: null,
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
          status: 'idle',
          error: null,
        },
      };
    default:
      return state;
  }
};
