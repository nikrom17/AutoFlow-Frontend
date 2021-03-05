import * as opportunitiesTypes from './opportunitiesTypes';
import { GenericThunkAction } from 'src/redux/commonTypes';
import api from 'src/api/api';

// ------ SIMPLE ACTIONS ------ //

// fetch all opportunities
export const fetchOpportunitiesStart = () => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITIES_START,
});

export const fetchOpportunitiesSuccess: opportunitiesTypes.FetchSuccess = (data) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITIES_SUCCESS,
  data,
});

export const fetchOpportunitiesFailed = (error: string) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITIES_FAILED,
  error,
});

// fetch all opportunity Infos
export const fetchOpportunityInfosStart = () => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_INFOS_START,
});

export const fetchOpportunityInfosSuccess: opportunitiesTypes.FetchSuccess = (data) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_INFOS_SUCCESS,
  data,
});

export const fetchOpportunityInfosFailed = (error: string) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_INFOS_FAILED,
  error,
});

// fetch a single opportunity
export const fetchOpportunityStart = () => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_START,
});

export const fetchOpportunitySuccess: opportunitiesTypes.FetchSuccess = (data) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_SUCCESS,
  data,
});

export const fetchOpportunityFailed = (error: string) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_FAILED,
  error,
});

// fetch a single opportunity Info
export const fetchOpportunityInfoStart = () => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_INFO_START,
});

export const fetchOpportunityInfoSuccess: opportunitiesTypes.FetchSuccess = (data) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_INFO_SUCCESS,
  data,
});

export const fetchOpportunityInfoFailed = (error: string) => ({
  type: opportunitiesTypes.FETCH_OPPORTUNITY_INFO_FAILED,
  error,
});

// ------ COMPLEX ACTIONS ------ //

// fetch all opportunities
export const fetchOpportunities: GenericThunkAction = () => async (dispatch) => {
  try {
    dispatch(fetchOpportunitiesStart());
    const response = await api.get('opportunities');
    dispatch(fetchOpportunitiesSuccess(response));
  } catch (error) {
    dispatch(fetchOpportunitiesFailed(error.message));
  }
};

// fetch all opportunity Infos
export const fetchOpportunityInfos: GenericThunkAction = () => async (dispatch) => {
  try {
    dispatch(fetchOpportunityInfosStart());
    const response = await api.get('opportunity-info');
    dispatch(fetchOpportunityInfosSuccess(response));
  } catch (error) {
    dispatch(fetchOpportunityInfosFailed(error.message));
  }
};

// fetch a single opportunity
export const fetchOpportunity: opportunitiesTypes.FetchOpportunity = (
  opportunityId: number
) => async (dispatch) => {
  try {
    dispatch(fetchOpportunityStart());
    const response = await api.get(`opportunities/${opportunityId}`);
    dispatch(fetchOpportunitySuccess(response));
  } catch (error) {
    dispatch(fetchOpportunityFailed(error.message));
  }
};

// fetch a single opportunity Info
export const fetchOpportunityInfo: opportunitiesTypes.FetchOpportunityInfo = (
  opportunityInfoId
) => async (dispatch) => {
  try {
    dispatch(fetchOpportunityInfoStart());
    const response = await api.get(`opportunity-info/${opportunityInfoId}`);
    dispatch(fetchOpportunityInfoSuccess(response));
  } catch (error) {
    dispatch(fetchOpportunityInfoFailed(error.message));
  }
};
