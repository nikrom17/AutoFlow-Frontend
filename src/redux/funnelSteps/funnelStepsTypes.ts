import { DefaultSchema, ThunkType } from '../commonTypes';

// ------ COMMON INTERFACES ------ //
export interface FunnelSteps {
  id: number;
  leads: number[];
  name: string;
  opportunityId: number;
}

export interface FunnelStepsState extends DefaultSchema<FunnelSteps> {}

// ------ THUNK ACTION TYPES ------ //
export type FetchFunnelSteps = () => ThunkType;
export type FetchFunnelStep = (funnelStepId: number) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_FUNNEL_STEPS_START = 'FETCH_FUNNEL_STEPS_START';
export const FETCH_FUNNEL_STEPS_SUCCESS = 'FETCH_FUNNEL_STEPS_SUCCESS';
export const FETCH_FUNNEL_STEPS_FAILED = 'FETCH_FUNNEL_STEPS_FAILED';

export const FETCH_FUNNEL_STEP_START = 'FETCH_FUNNEL_STEP_START';
export const FETCH_FUNNEL_STEP_SUCCESS = 'FETCH_FUNNEL_STEP_SUCCESS';
export const FETCH_FUNNEL_STEP_FAILED = 'FETCH_FUNNEL_STEP_FAILED';

// ------ TYPES ------ //

interface FetchFunnelStepsStart {
  type: typeof FETCH_FUNNEL_STEPS_START;
}
interface FetchFunnelStepsSuccess {
  type: typeof FETCH_FUNNEL_STEPS_SUCCESS;
  data: { funnelSteps: FunnelStepsState };
}
interface FetchFunnelStepsFailed {
  type: typeof FETCH_FUNNEL_STEPS_FAILED;
  error: string;
}

interface FetchFunnelStepStart {
  type: typeof FETCH_FUNNEL_STEP_START;
}
interface FetchFunnelStepSuccess {
  type: typeof FETCH_FUNNEL_STEP_SUCCESS;
  data: { funnelSteps: FunnelStepsState };
}
interface FetchFunnelStepFailed {
  type: typeof FETCH_FUNNEL_STEP_FAILED;
  error: string;
}

export type Types =
  | FetchFunnelStepsStart
  | FetchFunnelStepsSuccess
  | FetchFunnelStepsFailed
  | FetchFunnelStepStart
  | FetchFunnelStepSuccess
  | FetchFunnelStepFailed;

// ------ ACTION TYPES ------ //
export type FetchSuccess = (data: { funnelSteps: FunnelStepsState }) => Types;
