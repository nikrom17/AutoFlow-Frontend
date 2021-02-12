import { ThunkType, DefaultSchema } from './commonTypes';

// ------ COMMON INTERFACES ------ //
export interface Leads {
  address: string;
  chanceToConvert: number;
  email: string;
  history?: number[];
  id: number;
  lastComm: string;
  name: string;
  notes?: number[];
  opportunityInfo: object;
  phone: string;
  tags?: number[];
  type: 'individual' | 'business';
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
interface FetchLeadsSuccess {
  type: typeof FETCH_LEADS_SUCCESS;
  data: LeadsState;
}

interface FetchLeadSuccess {
  type: typeof FETCH_LEAD_SUCCESS;
  data: LeadsState;
}

export type Types = FetchLeadsSuccess | FetchLeadSuccess;
