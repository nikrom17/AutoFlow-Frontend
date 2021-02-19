import { DefaultSchema } from './commonTypes';

// ------ COMMON INTERFACES ------ //
export interface Opportunities {
  funnelSteps: number[];
  id: number;
  name: string;
}

export interface FunnelSteps {
  id: number;
  name: string;
  opportunity: number;
  leads: number[];
}

export interface FunnelStepsState extends DefaultSchema<FunnelSteps> {}
