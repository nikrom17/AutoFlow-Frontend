import { DefaultSchema, ThunkType } from '../commonTypes';

// ------ COMMON INTERFACES ------ //
export interface Opportunities {
  funnelSteps: number[];
  id: number;
  name: string;
}

export interface OpportunitiesState {
  name: DefaultSchema<Opportunities>;
  info: DefaultSchema<any>;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchOpportunities = () => ThunkType;
export type FetchOpportunity = (opportunityId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_OPPORTUNITIES_START = 'FETCH_OPPORTUNITIES_START';
export const FETCH_OPPORTUNITIES_SUCCESS = 'FETCH_OPPORTUNITIES_SUCCESS';
export const FETCH_OPPORTUNITIES_FAILED = 'FETCH_OPPORTUNITIES_FAILED';

export const FETCH_OPPORTUNITY_START = 'FETCH_OPPORTUNITY_START';
export const FETCH_OPPORTUNITY_SUCCESS = 'FETCH_OPPORTUNITY_SUCCESS';
export const FETCH_OPPORTUNITY_FAILED = 'FETCH_OPPORTUNITY_FAILED';

// ------ TYPES ------ //
interface FetchOpportunitiesSuccess {
  type: typeof FETCH_OPPORTUNITIES_SUCCESS;
  data: { opportunities: DefaultSchema<Opportunities> };
}

interface FetchOpportunitySuccess {
  type: typeof FETCH_OPPORTUNITY_SUCCESS;
  data: { opportunities: DefaultSchema<Opportunities> };
}

export type Types = FetchOpportunitiesSuccess | FetchOpportunitySuccess;

// ------ ACTION TYPES ------ //
export type FetchSuccess = (data: {
  opportunities: DefaultSchema<Opportunities>;
}) => Types;
