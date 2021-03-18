import { ThunkType, DefaultSchema } from '../commonTypes';
import { FunnelStepsState } from '../funnelSteps/funnelStepsTypes';
// ------ COMMON INTERFACES ------ //
export interface Leads {
  id: number;
  city: string;
  state: string;
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

type formSubmitLeads = Omit<
  Leads,
  'id' | 'chanceToConvert' | 'dateCreated' | 'funnelStepId' | 'lastContact'
>;

export interface AddLeadFormData extends formSubmitLeads {
  funnelStepId: number[];
}

// ------ THUNK ACTION TYPES ------ //
export type FetchLeads = () => ThunkType;
export type FetchLead = (clientId: number) => ThunkType;
export type AddLead = (lead: AddLeadFormData) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_LEADS_START = 'FETCH_LEADS_START';
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS';
export const FETCH_LEADS_FAILED = 'FETCH_LEADS_FAILED';

export const FETCH_LEAD_START = 'FETCH_LEAD_START';
export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS';
export const FETCH_LEAD_FAILED = 'FETCH_LEAD_FAILED';

export const ADD_LEAD_START = 'ADD_LEAD_START';
export const ADD_LEAD_SUCCESS = 'ADD_LEAD_SUCCESS';
export const ADD_LEAD_FAILED = 'ADD_LEAD_FAILED';

// ------ TYPES ------ //

// fetch all leads
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

// fetch single lead
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

// add a new lead
interface AddLeadStart {
  type: typeof ADD_LEAD_START;
}
interface AddLeadSuccess {
  type: typeof ADD_LEAD_SUCCESS;
  data: { leads: LeadsState; funnelSteps: FunnelStepsState };
}
interface AddLeadFailed {
  type: typeof ADD_LEAD_FAILED;
  error: string;
}

export type Types =
  | FetchLeadsStart
  | FetchLeadsSuccess
  | FetchLeadsFailed
  | FetchLeadStart
  | FetchLeadSuccess
  | FetchLeadFailed
  | AddLeadStart
  | AddLeadSuccess
  | AddLeadFailed;

// ------ ACTION TYPES ------ //
export type FetchSuccess = (data: { leads: LeadsState }) => Types;
export type PostSuccess = (data: {
  leads: LeadsState;
  funnelSteps: FunnelStepsState;
}) => Types;
