import { ThunkType, DefaultSchema } from '../commonTypes';

// ------ COMMON INTERFACES ------ //
export interface Leads {
  address: string;
  chanceToConvert: number;
  email: string;
  funnelStepId: number;
  events?: number[]; // add this to db
  id: number;
  lastComm: string; // convert to date
  name: string;
  notes?: number[]; // add this to db
  dateCreated?: Date;
  phone: string;
  tags?: number[];
  type: 'individual' | 'business';
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
interface FetchLeadsSuccess {
  type: typeof FETCH_LEADS_SUCCESS;
  data: { leads: LeadsState };
}

interface FetchLeadSuccess {
  type: typeof FETCH_LEAD_SUCCESS;
  data: { leads: LeadsState };
}

export type Types = FetchLeadsSuccess | FetchLeadSuccess;

// ------ ACTION TYPES ------ //
export type FetchSuccess = (data: { leads: LeadsState }) => Types;
