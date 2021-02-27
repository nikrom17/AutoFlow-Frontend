import * as leadsTypes from './leadsTypes';
import api from 'src/api/api';

// ------ SIMPLE ACTIONS ------ //

// fetch all leads
export const fetchLeadsStart = () => ({
  type: leadsTypes.FETCH_LEADS_START,
});

export const fetchLeadsSuccess = (data: leadsTypes.LeadsState) => ({
  type: leadsTypes.FETCH_LEADS_SUCCESS,
  data,
});

export const fetchLeadsFailed = () => ({
  type: leadsTypes.FETCH_LEADS_FAILED,
});

// fetch a single lead
export const fetchLeadStart = () => ({
  type: leadsTypes.FETCH_LEAD_START,
});

export const fetchLeadSuccess = (data: leadsTypes.LeadsState) => ({
  type: leadsTypes.FETCH_LEAD_SUCCESS,
  data,
});

export const fetchLeadFailed = () => ({
  type: leadsTypes.FETCH_LEAD_FAILED,
});

// ------ COMPLEX ACTIONS ------ //

// Admin

// fetch all leads
export const fetchLeads: leadsTypes.FetchLeads = () => async (dispatch) => {
  try {
    dispatch(fetchLeadsStart());
    const response = await api.get('leads');
    dispatch(fetchLeadsSuccess(response));
  } catch (error) {
    dispatch(fetchLeadsFailed());
  }
};

// fetch a single lead
export const fetchLead: leadsTypes.FetchLead = (leadId: number) => async (dispatch) => {
  try {
    dispatch(fetchLeadStart());
    const response = await api.get(`leads/${leadId}`);
    dispatch(fetchLeadSuccess(response));
  } catch (error) {
    dispatch(fetchLeadFailed());
  }
};
