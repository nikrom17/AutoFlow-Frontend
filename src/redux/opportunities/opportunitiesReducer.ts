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
    // ------- Start -------- //
    case opportunitiesTypes.FETCH_OPPORTUNITIES_START:
    case opportunitiesTypes.FETCH_OPPORTUNITY_START:
      return {
        ...state,
        name: {
          ...state.name,
          status: 'fetching',
        },
      };
    case opportunitiesTypes.FETCH_OPPORTUNITY_INFOS_START:
    case opportunitiesTypes.FETCH_OPPORTUNITY_INFO_START:
      return {
        ...state,
        info: {
          ...state.info,
          status: 'fetching',
        },
      };
    // ------- Success -------- //
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
    // ------- Failed -------- //
    case opportunitiesTypes.FETCH_OPPORTUNITIES_FAILED:
    case opportunitiesTypes.FETCH_OPPORTUNITY_FAILED:
      return {
        ...state,
        name: {
          ...state.name,
          status: 'idle',
          error: action.error,
        },
      };
    case opportunitiesTypes.FETCH_OPPORTUNITY_INFOS_FAILED:
    case opportunitiesTypes.FETCH_OPPORTUNITY_INFO_FAILED:
      return {
        ...state,
        info: {
          ...state.info,
          status: 'idle',
          error: action.error,
        },
      };
    default:
      return state;
  }
};
