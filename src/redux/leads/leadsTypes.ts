import { ThunkType, DefaultSchema } from '../commonTypes';

// ------ COMMON INTERFACES ------ //
export interface Leads {
  id: number;
  address: string;
  chanceToConvert: number;
  dateCreated?: Date;
  email: string;
  funnelStepId: number;
  lastContact: Date;
  name: string;
  phone: string;
  status: string;
}

export interface LeadsState extends DefaultSchema<Leads> {}

// ------ THUNK ACTION TYPES ------ //
export type FetchLeads = () => ThunkType;
export type FetchLead = (clientId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_LEADS_START = 'FETCH_LEADS_START';
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS';
export const FETCH_LEADS_FAILED = 'FETCH_LEADS_FAILED';

export const FETCH_LEAD_START = 'FETCH_LEAD_START';
export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';
export const FETCH_LEAD_FAILED = 'FETCH_LEAD_FAILED';

// ------ TYPES ------ //
interface FetchLeadsStart {
  type: typeof FETCH_LEADS_START;
}
interface FetchLeadsSuccess {
  type: typeof FETCH_LEADS_SUCCESS;
  data: { leads: LeadsState };
}
interface FetchLeadsFailed {
  type: typeof FETCH_LEADS_FAILED;
  error: string;
}

interface FetchLeadStart {
  type: typeof FETCH_LEAD_START;
}
interface FetchLeadSuccess {
  type: typeof FETCH_LEAD_SUCCESS;
  data: { leads: LeadsState };
}
interface FetchLeadFailed {
  type: typeof FETCH_LEAD_FAILED;
  error: string;
}

export type Types =
  | FetchLeadsStart
  | FetchLeadsSuccess
  | FetchLeadsFailed
  | FetchLeadStart
  | FetchLeadSuccess
  | FetchLeadFailed;

// ------ ACTION TYPES ------ //
export type FetchSuccess = (data: { leads: LeadsState }) => Types;
