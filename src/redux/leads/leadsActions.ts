import * as leadsTypes from './leadsTypes';
import { DefaultThunkAction, ThunkActionId } from '../commonTypes';
import api from 'src/api/api';

// ------ SIMPLE ACTIONS ------ //

// fetch all leads
export const fetchLeadsStart = () => ({
  type: leadsTypes.FETCH_LEADS_START,
});

export const fetchLeadsSuccess: leadsTypes.FetchSuccess = (data) => ({
  type: leadsTypes.FETCH_LEADS_SUCCESS,
  data,
});

export const fetchLeadsFailed = (error: string) => ({
  type: leadsTypes.FETCH_LEADS_FAILED,
  error,
});

// fetch a single lead
export const fetchLeadStart = () => ({
  type: leadsTypes.FETCH_LEAD_START,
});

export const fetchLeadSuccess: leadsTypes.FetchSuccess = (data) => ({
  type: leadsTypes.FETCH_LEAD_SUCCESS,
  data,
});

export const fetchLeadFailed = (error: string) => ({
  type: leadsTypes.FETCH_LEAD_FAILED,
  error,
});

// add a single lead
export const addLeadStart = () => ({
  type: leadsTypes.ADD_LEAD_START,
});

export const addLeadSuccess: leadsTypes.PostSuccess = (data) => ({
  type: leadsTypes.ADD_LEAD_SUCCESS,
  data,
});

export const addLeadFailed = (error: string) => ({
  type: leadsTypes.ADD_LEAD_FAILED,
  error,
});

// delete a single lead
export const deleteLeadStart = () => ({
  type: leadsTypes.DELETE_LEAD_START,
});

export const deleteLeadSuccess: leadsTypes.DeleteSuccess = (data) => ({
  type: leadsTypes.DELETE_LEAD_SUCCESS,
  data,
});

export const deleteLeadFailed = (error: string) => ({
  type: leadsTypes.DELETE_LEAD_FAILED,
  error,
});

// ------ COMPLEX ACTIONS ------ //

// fetch all leads
export const fetchLeads: DefaultThunkAction = () => async (dispatch) => {
  try {
    dispatch(fetchLeadsStart());
    const response = await api.get('leads');
    dispatch(fetchLeadsSuccess(response));
  } catch (error) {
    dispatch(fetchLeadsFailed(error.message));
  }
};

// fetch a single lead
export const fetchLead: ThunkActionId<number> = (leadId) => async (dispatch) => {
  try {
    dispatch(fetchLeadStart());
    const response = await api.post(`leads/${leadId}`);
    dispatch(fetchLeadSuccess(response));
  } catch (error) {
    dispatch(fetchLeadFailed(error.message));
  }
};

// add a single lead
export const addLead: leadsTypes.AddLead = (newLead) => async (dispatch) => {
  try {
    dispatch(addLeadStart());
    const payload: any = { ...newLead };
    payload.funnelStepId = newLead.funnelStepId[1];
    const response = await api.post('leads', payload);
    dispatch(addLeadSuccess(response));
  } catch (error) {
    dispatch(addLeadFailed(error.message));
  }
};

// delete a single lead
export const deleteLead: ThunkActionId<number> = (leadId) => async (dispatch) => {
  try {
    dispatch(deleteLeadStart());
    const response = await api.delete(`leads/${leadId}`);
    dispatch(deleteLeadSuccess(response));
  } catch (error) {
    dispatch(deleteLeadFailed(error.message));
  }
};
