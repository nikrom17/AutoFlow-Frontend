import * as leadsTypes from './leadsTypes';
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

// ------ COMPLEX ACTIONS ------ //

// fetch all leads
export const fetchLeads: leadsTypes.FetchLeads = () => async (dispatch) => {
  try {
    dispatch(fetchLeadsStart());
    const response = await api.get('leads');
    dispatch(fetchLeadsSuccess(response));
  } catch (error) {
    dispatch(fetchLeadsFailed(error.message));
  }
};

// fetch a single lead
export const fetchLead: leadsTypes.FetchLead = (leadId: number) => async (dispatch) => {
  try {
    dispatch(fetchLeadStart());
    const response = await api.get(`leads/${leadId}`);
    dispatch(fetchLeadSuccess(response));
  } catch (error) {
    dispatch(fetchLeadFailed(error.message));
  }
};
