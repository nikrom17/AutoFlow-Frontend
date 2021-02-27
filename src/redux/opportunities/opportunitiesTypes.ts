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

// ------ CONSTANTS ------ //
export const FETCH_OPPORTUNITIES_START = 'FETCH_OPPORTUNITIES_START';
export const FETCH_OPPORTUNITIES_SUCCESS = 'FETCH_OPPORTUNITIES_SUCCESS';
export const FETCH_OPPORTUNITIES_FAILED = 'FETCH_OPPORTUNITIES_FAILED';

// ------ TYPES ------ //
interface FetchOpportunitiesSuccess {
  type: typeof FETCH_OPPORTUNITIES_SUCCESS;
  data: OpportunitiesState;
}

export type Types = FetchOpportunitiesSuccess;
