import { DefaultSchema, ThunkType } from '../commonTypes';

// ------ COMMON INTERFACES ------ //
export interface Opportunities {
  funnelSteps: number[];
  id: number;
  name: string;
}

export interface OpportunitiesState {
  name: DefaultSchema<Opportunities>;
  info: DefaultSchema<any>; // the object schema will eventually be defined by the client
}

// ------ THUNK ACTION TYPES ------ //
export type FetchOpportunity = (opportunityId: number) => ThunkType;
export type FetchOpportunityInfo = (opportunityInfoId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_OPPORTUNITIES_START = 'FETCH_OPPORTUNITIES_START';
export const FETCH_OPPORTUNITIES_SUCCESS = 'FETCH_OPPORTUNITIES_SUCCESS';
export const FETCH_OPPORTUNITIES_FAILED = 'FETCH_OPPORTUNITIES_FAILED';

export const FETCH_OPPORTUNITY_START = 'FETCH_OPPORTUNITY_START';
export const FETCH_OPPORTUNITY_SUCCESS = 'FETCH_OPPORTUNITY_SUCCESS';
export const FETCH_OPPORTUNITY_FAILED = 'FETCH_OPPORTUNITY_FAILED';

export const FETCH_OPPORTUNITY_INFOS_START = 'FETCH_OPPORTUNITY_INFOS_START';
export const FETCH_OPPORTUNITY_INFOS_SUCCESS = 'FETCH_OPPORTUNITY_INFOS_SUCCESS';
export const FETCH_OPPORTUNITY_INFOS_FAILED = 'FETCH_OPPORTUNITY_INFOS_FAILED';

export const FETCH_OPPORTUNITY_INFO_START = 'FETCH_OPPORTUNITY_INFO_START';
export const FETCH_OPPORTUNITY_INFO_SUCCESS = 'FETCH_OPPORTUNITY_INFO_SUCCESS';
export const FETCH_OPPORTUNITY_INFO_FAILED = 'FETCH_OPPORTUNITY_INFO_FAILED';

// ------ TYPES ------ //
interface FetchOpportunitiesSuccess {
  type: typeof FETCH_OPPORTUNITIES_SUCCESS;
  data: { opportunities: DefaultSchema<Opportunities> };
}

interface FetchOpportunitySuccess {
  type: typeof FETCH_OPPORTUNITY_SUCCESS;
  data: { opportunities: DefaultSchema<Opportunities> };
}

interface FetchOpportunityInfosSuccess {
  type: typeof FETCH_OPPORTUNITY_INFOS_SUCCESS;
  data: { opportunities: DefaultSchema<Opportunities> };
}

interface FetchOpportunityInfoSuccess {
  type: typeof FETCH_OPPORTUNITY_INFO_SUCCESS;
  data: { opportunities: DefaultSchema<Opportunities> };
}

export type Types =
  | FetchOpportunitiesSuccess
  | FetchOpportunitySuccess
  | FetchOpportunityInfosSuccess
  | FetchOpportunityInfoSuccess;

// ------ ACTION TYPES ------ //
export type FetchSuccess = (data: {
  opportunities: DefaultSchema<Opportunities>;
}) => Types;
